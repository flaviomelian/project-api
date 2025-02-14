import { useContext } from "react";
import { Context } from "../../Context/context";

const Balance = () => {
  const team = useContext(Context)
  
  return (
    <div>
      <h2>Balance del Equipo</h2>
      {team === undefined ? (
        <p>No hay Pokimons en tu equipo.</p>
      ) : (
        <ul>
          {team.team.map((pokemon, index) => (
            <li key={index}>
              <h3>{pokemon.name.toUpperCase()}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Balance;