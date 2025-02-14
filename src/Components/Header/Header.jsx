import {useState, useEffect} from 'react'
import api from '../../assets/api.jpg'
import house from '../../assets/casita.png'
import logout from '../../assets/logout.png'
import sun from '../../assets/sun.jpg'
import moon from '../../assets/moon.jpg'
import reports from '../../assets/reports.png'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [light, setLight] = useState(true)
  useEffect(() => {
    if (light) {
      // Si light es true, es tema claro
      document.getElementsByTagName('body')[0].style.backgroundColor = '#fff'; // Fondo claro
      document.getElementsByTagName('body')[0].style.color = '#0af'; // Color de texto oscuro
    } else {
      // Si light es false, es tema oscuro
      document.getElementsByTagName('body')[0].style.backgroundColor = '#333'; // Fondo oscuro
      document.getElementsByTagName('body')[0].style.color = '#fff'; // Color de texto claro
    }
  }, [light]);
  return (
    <div className='header'>
        <div>
          <Link to='/'>
            <img className='house' src={house}/>
          </Link>
        </div>
        <div>
          <Link to='/api'>
            <img className='api' src={api}/>
          </Link>
        </div>
        <div>
          <Link to='/reports'>
            <img className='reports' src={reports}/>
          </Link>
        </div>
        <div>
          <Link to='/login'>
            <img className='logout' src={logout}/>
          </Link>
        </div>
        <div className='sun-div'>
          <button className='sun-button' onClick={() => {
            setLight(!light)
          }}>
            {light === true ? <img className='sun' src={sun} /> : <img className='sun' src={moon}/>}
          </button>
        </div>
    </div>
  )
}

export default Header