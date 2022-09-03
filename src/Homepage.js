import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import Logo from './img/logo.png'
import Illustration1 from './img/hp-illustration-1.jpg'

function Homepage() {
  return (
    <div className='homepage'>
        <div className='hp-nav'>
          <div className='hp-brand'>
            <img 
              src={Logo} 
              alt='homepage logo'
              className='hp-logo'
            />
            <span>Ally</span>
          </div>
          <div className='hp-nav-button-container'>
            <Link to={'/login'}>
              <button className='hp-nav-button'>Sign in</button>
            </Link>
            <Link to={'/register'}>
              <button className='hp-nav-button'>Sign up</button>
            </Link>
          </div>
        </div>

        <div className='hp-container'>
          <div className='hp-login-and-register'>

          </div>
          <div className='hp-container-nav'>
            <ul>
              <li>
                <a href='#key-message' id='section-1' className='hp-container-nav-section'>About this project</a>
              </li>
              <li>
                <a href='#key-message1' className='hp-container-nav-section'>How I built this project</a>
              </li>
              <li>
                <a href='#key-message2' className='hp-container-nav-section'>Project's features</a>
              </li>
            </ul>
          </div>
          <div className='hp-content'>
              <img 
                src={Illustration1}
                className='hp-content-illustration'
              />
          </div>
        </div>
    </div>
  )
}

export default Homepage