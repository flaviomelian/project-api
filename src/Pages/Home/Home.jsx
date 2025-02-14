//import React from 'react'
import "./Home.css"
import pikachu from './../../assets/pikachu.png'

const Home = () => {
  return (
    <div className="home">
      <h1>¡Bienvenido al Mundo Pókimon, MAMAHUEVO!</h1>
      <h2>Descubre, explora y aprende sobre todos los Pókimon.</h2>
      <img className="pikachu" src={pikachu}/>
      <section id="intro">
        <h2>¿Qué es esta página?</h2>
        <p className="paragrph-intro">
          Esta es tu Pokidex digital, una herramienta para explorar información detallada sobre tus Pókimon favoritos. Aquí podrás:
        </p>
        <ul>
          <li>Buscar Pókimon por nombre o ID.</li>
          <li>Ver características como tipo, habilidades, y estadísticas.</li>
          <li>Explorar una lista completa de todos los Pókimon disponibles.</li>
          <li>Aprender sobre sus evoluciones y formas especiales.</li>
        </ul>
      </section>

      <section id="destacados">
        <h2>Características Destacadas</h2>
        <article>
          <h3 className="h-home">Interfaz Intuitiva</h3>
          <p>
            Diseñada para que encuentres rápidamente la información que necesitas, con una navegación sencilla y visualmente atractiva.
          </p>
        </article>
        <article>
          <h3 className="h-home">Actualizada con la PokiAPI</h3>
          <p>
            Los datos se obtienen directamente de la PokiAPI, asegurando que siempre estés al día con las últimas actualizaciones del mundo Pókimon.
          </p>
        </article>
        <article>
          <h3 className="h-home">Compatible con Dispositivos Móviles</h3>
          <p>
            Lleva la Pokidex contigo a donde vayas. Nuestra página está optimizada para usarse desde cualquier dispositivo.
          </p>
        </article>
      </section>

      <section id="llamado-a-la-accion">
        <h2>¡Empieza Ahora!</h2>
        <p>¿Listo para explorar el universo Pókimon?</p>
        <a href="#buscar">Busca Pókimon</a> o <a href="#listado">Explora la lista completa</a>.
      </section>
    </div>
  )
}

export default Home