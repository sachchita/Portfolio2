import './OurImgStyle.css';
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';
const OurImg = () => {
  return (
    <div className='our'>
   <div className='mask'>
     <img className='into-img' src={IntroImg} alt='IntroImg' />
    </div>       
    <div className='content'>
        <p>HI I'M A OPENTOWORK.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to='/project' className='btn'>Project</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>

        </div>
    </div>
    </div>
  )
}

export default OurImg