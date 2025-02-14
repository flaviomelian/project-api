import PropTypes from 'prop-types';
import "./PokimonCard.css";

const PokimonCard = ({ pokimonName, abilities, URL, onAddToTeam}) => {

  return (
    <>
      <div className="card">
        <h3>{pokimonName}</h3>
        <h3>{abilities}</h3>
        <h4><a href={URL}>More info</a></h4>
        <button 
          className="button-pokimon-card" 
          onClick={() => onAddToTeam()}
        >
          Añadir a tu equipo
        </button>
        {/*Array.isArray(team) && team.some((pokemon) => pokemon.name === pokimonName) ? (<p>Añadido al equipo</p>) : (<p></p>)*/}
      </div>
    </>
  );
};


// Validación de las props con prop-types
PokimonCard.propTypes = {
  pokimonName: PropTypes.string.isRequired, 
  abilities: PropTypes.oneOfType([         
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  URL: PropTypes.string.isRequired,        
  onAddToTeam: PropTypes.func.isRequired,
};

export default PokimonCard;
