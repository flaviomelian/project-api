//import React from 'react'
import PokimonCard from '../PokimonCard/PokimonCard.jsx'
import { useState, useEffect, useReducer } from "react";
//import { useParams } from 'react-router-dom';
import axios from "axios";
import { api, getPokimon, getProduct } from "../../Services/Services.js";
import "./PokimonCards.css"
import PokimonTeam from '../PokimonTeam/PokimonTeam.jsx';
import lookFor from '../../assets/look-for.png'
import chat from '../../assets/vector-chat-icon.jpg'
import SpeechRecognitionComponent from '../SpeechRecognition/SpeechRecognitionComponent.jsx';

// Reducer para manejar el equipo de Pokimons
const teamReducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (state.length < 6 && !state.find(p => p.name === action.pokemon.name)) {
        return [...state, action.pokemon];
      }
      return state;
    case "remove":
      return state.filter(p => p.name !== action.pokemon.name);
    case "reset":
      return [];
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
};

const PokimonCards = () => {
  const [product, setProduct] = useState('')
  const [pokimons, setPokimons] = useState([]);
  const [team, dispatch] = useReducer(teamReducer, []);
  const [searchTerm, setSearchTerm] = useState(""); // Valor del input
  const [searchedPokemon, setSearchedPokemon] = useState(null); // Resultado de búsqueda
  const [error, setError] = useState(null); // Error al buscar Pokémon
  const [show, setShow] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        let response
        try {
          console.log("BaseURL: ", api.defaults.baseURL)
          response = await axios.get(api.defaults.baseURL);
          console.log("Response.data: ", response.data)
          setPokimons(response.data.results);
        } catch (error) {
          //console.log("Response.data (CATCH): ", response.data)
          console.error('Error al obtener datos desde el servidor', error);
        }
      };
  
      fetchData();
    }, []);

    const addToTeam = (pokemon) => {
      dispatch({ type: "add", pokemon });
    };
  
    const removeFromTeam = (pokemon) => {
      dispatch({ type: "remove", pokemon});
    };
  
    const resetTeam = () => dispatch({ type: "reset" });

    const handleSearch = async () => {
      try {
        setError(null); // Reinicia el error
        const product = await getPokimon(searchTerm.toLowerCase());
        setSearchedPokemon(product); // Guarda el Pokémon encontrado
      } catch (error) {
        setSearchedPokemon(null); // Limpia el resultado anterior si hay error
        setError("No se encontró el Pokémon"); // Muestra un mensaje de error
      }
    }  

    /*const handleSearchInAlgolia = async () => {
      try {
        console.log("skdjbfksdbfn");
        
        setError(null); // Reinicia el error
        const product = await getProduct(searchTerm.toLowerCase());
        setProduct(product); // Guarda el Pokémon encontrado
      } catch (error) {
        setSearchedPokemon(null); // Limpia el resultado anterior si hay error
        setError("No se encontró el Pokémon"); // Muestra un mensaje de error
      }
    }  */

    const showchat = () => {setShow(!show); console.log(show) }

    return (
      <>
        {show ? (
          <SpeechRecognitionComponent />
      ):(<div></div>)}
        <div className='pokimon-cards'>
          <h2>PÓKIMONS</h2>
          <div className='container'>
            <img className='look-for' src={lookFor}/>
            <input type="text"
                  className='input-pokimon-form' 
                  placeholder='Introduzca el nombre del pokimon'
                  onChange={(e) => {setSearchTerm(e.target.value); handleSearch}}/>
            <button className='chat-button' onClick={ () =>{showchat()}}>
              <img className='chat' src={chat}/>
            </button>
          </div>
          {/*<div className='container'>
            <h3 className='look-for-algolia'>Buscar en algolia</h3>
            <input type="text"                    YO POR LO MENOS LO INTENTÉ ;_;
                  className='input-pokimon-form' 
                  placeholder='Introduzca el nombre del pokimon'
                  onChange={/*(e) => {setSearchTerm(e.target.value); handleSearchInAlgolia}
          </div>*/}
          <PokimonTeam team={team} removeFromTeam={removeFromTeam} resetTeam={resetTeam} />
            { searchTerm == "" ? pokimons.map((pokimon, index) => (
                <PokimonCard 
                  key={index}
                  pokimonName={pokimon.name}
                  abilities={pokimon.abilities}
                  URL={pokimon.url}
                  onAddToTeam={() => addToTeam({ name: pokimon.name, experience: pokimon.URL  })}
                />
              )) 
            : pokimons
                .filter((pokimon) => pokimon.name === searchTerm.toLowerCase())
                .map((pokimon, index) => (
                  <PokimonCard 
                    key={index}
                    pokimonName={pokimon.name}
                    abilities={pokimon.abilities}
                    URL={pokimon.url}
                    onAddToTeam={() => addToTeam({ name: pokimon.name, experience: pokimon.URL  })}ç
                  />
                ))}
        </div>
      </>
      );
}

export default PokimonCards