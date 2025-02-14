import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';
//import { Context } from './Context/context';

function App() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
