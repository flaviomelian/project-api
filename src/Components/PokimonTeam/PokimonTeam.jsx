//import { useEffect } from "react";
import PropTypes from "prop-types";
import './PokimonTeam.css'
import pokeball from './../../assets/pokeball.png'
import {getBaseStat} from '../../Services/Services.js'
import { useNavigate } from "react-router-dom";
//import { Context } from '../../Context/context'
import { useContext } from "react";
import axios from "axios";

const PokimonTeam = ({ team, removeFromTeam, resetTeam }) => {
  
  return (
    <div className="pokimon-team">
      {team.length > 0 ? (
        <h3 className="your-pokemon-team">Tu equipo de Pokimons:</h3>
      ) : null}
      {team.length > 0 ? (
        <button className="reset" onClick={resetTeam}>Resetear equipo</button>
      ) : null}
      <ul className="team">
        {team.map((pokemon, index) => (
          <li className="pokimon" key={index}>
            <img className="icon-li" src={pokeball}/>
            <b className="name">{pokemon.name.toUpperCase()}</b>
            <button className="remove" onClick={() => removeFromTeam(pokemon)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {team.length === 6 ? (
        <div className="full-team">
          <h3><b>EQUIPO COMPLETO</b></h3>
        </div>
        ) : (<p></p>)}
    </div>
  );
};

/*const PokimonTeam = () => {
  const navigate = useNavigate();
  const { team, dispatch } = useContext(Context); // Usa el contexto para acceder al estado global

  const resetTeam = () => dispatch({ type: 'reset' });
  const removeFromTeam = (pokemon) => dispatch({ type: 'remove', pokemon });

  return (
    <div className="pokimon-team">
      {team.length > 0 ? (
        <h3 className="your-pokemon-team">Tu equipo de Pokimons:</h3>
      ) : null}
      {team.length > 0 ? (
        <button className="reset" onClick={resetTeam}>Resetear equipo</button>
      ) : null}
      <ul className="team">
        {team.map((pokemon, index) => (
          <li className="pokimon" key={index}>
            <img className="icon-li" src={pokeball} />
            <b className="name">{pokemon.name.toUpperCase()}</b>
            <button className="remove" onClick={() => removeFromTeam(pokemon)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {team.length === 6 ? (
        <a className="go-to-balance" onClick={() => navigate('/balance')}>Ver Balance del equipo</a>
      ) : (
        <p></p>
      )}
    </div>
  );
};*/

// Validación de las props
PokimonTeam.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Cada Pokémon debe tener un nombre
      url: PropTypes.string.isRequired,  // Cada Pokémon debe tener una URL
    })
  ).isRequired, // El equipo completo es obligatorio
  removeFromTeam: PropTypes.func.isRequired, // La función para eliminar es obligatoria
  resetTeam: PropTypes.func.isRequired, // La función para reiniciar es obligatoria
};

export default PokimonTeam;
