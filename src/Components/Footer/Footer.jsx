//import React from 'react'
import './Footer.css'
import linkedin from './../../assets/linkedin.png'
import github from './../../assets/github.jpg'

const Footer = () => {
  return (
    <>
        <div className="footer">
          <h2 className="in-footer">_fmsijk_ &copy;</h2>
          <img className='img-footer' src={linkedin}></img>
          <img className='img-footer' src={github}></img>

        </div>
    </>
  )
}

export default Footer