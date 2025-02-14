import { useContext } from 'react';
import { Context } from '../../Context/context';
import './Profile.css'

const Profile = () => {
  const { user } = useContext(Context); // Accede al usuario desde el contexto

  return (
    <div className='profile'>
      <h1>Perfil del Usuario</h1>
      <h2 className='welcome'>Bienvenido, {user}</h2>
    </div>
  );
}

export default Profile