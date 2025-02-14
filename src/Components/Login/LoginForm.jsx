//import React from 'react'
import user from './../../assets/user.png'
import lock from './../../assets/lock.png'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/context'
import { useContext } from 'react'

const LoginForm = () => {

  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  return (
    <div className='login-form'>
      <h1>Iniciar Sesión</h1>
      <div className='img-input'>
        <img className='image' src={user}/>
        <div className='input'>
          <h2>Usuario</h2>
          <input className='input-login-form' placeholder='Introduzca su nombre de usuario' onChange={ () => setUser(event.target.value)}/>
        </div>
      </div>
      <div className='img-input'>
        <img className='image' src={lock}/>
        <div className='input'>
          <h2>Contraseña</h2>
          <input type='password' className='input-login-form' placeholder='Introduzca su contraseña'/>
        </div>
      </div>
      <button className='login-button-form' onClick={() => navigate("/profile")}>Iniciar Sesión</button>
    </div>
  )
}

export default LoginForm