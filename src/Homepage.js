import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import Logo from './img/logo.png'
import Illustration1 from './img/hp-illustration-1.jpg'
import Illustration2 from './img/hp-illustration-2.png'
import Illustration3 from './img/hp-illustration-3.jpg'

function Homepage() {
  return (
    <div className='homepage'>
      <h1 id='key1'></h1>
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
          <p className='hp-container-service-name'>Ally</p>
          <p className='hp-container-slogan'>Anyone, Anywhere</p>
          <Link to={'/login'}>
            <button className='hp-container-button'>Sign in ></button>
          </Link>
          <Link to={'/register'}>
            <button className='hp-container-button'>Sign up ></button>
          </Link>
        </div>
        <div className='hp-container-nav-and-content-illustation'>
          <div className='hp-container-nav'>
            <ul>
              <li>
                <a href='#key1' className='hp-container-nav-section'>About this project</a>
              </li>
              <li>
                <a href='#key2' className='hp-container-nav-section'>How I built this project</a>
              </li>
              <li>
                <a href='#key3' className='hp-container-nav-section'>Project's features</a>
              </li>
            </ul>
          </div>
          <img 
            src={Illustration1}
            className='hp-content-illustration'
          />
        </div>
        <div className='hp-container-content'>
          <p id='key-message1'>About this project</p>
          <p id='key-message1-detail'>
            Collaborate productively with anyone by keeping all your communications in one place, organizing conversation topics by channel, and reacting quickly with emojis.
          </p>
          <h1 id='key2'></h1>
        </div>
        {/* HowIbuiltthisproject */}
        <div className='hp-container-nav-and-content-illustation'>
          <img 
            src={Illustration2}
            className='hp-content-illustration'
          />
          <div className='hp-container-nav'>
            <ul>
              <li>
                <a href='#key1' className='hp-container-nav-section'>About this project</a>
              </li>
              <li>
                <a href='#key2' className='hp-container-nav-section'>How I built this project</a>
              </li>
              <li>
                <a href='#key3' className='hp-container-nav-section'>Project's features</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='hp-container-content'>
          <p id='key-message2'>How I built this project</p>
          <p id='key-message2-detail'>
          Starting with the design, I sketched out each screen as specifically as I could. Then I use MySQL to build the database, use Nodejs with Express to create the API. I ended up using React to build the screen
          </p>
        </div>
        {/* Project's features  */}
        <h1 id='key3'></h1>
        <div className='hp-container-nav-and-content-illustation'>
          <div className='hp-container-nav'>
            <ul>
              <li>
                <a href='#key1' className='hp-container-nav-section'>About this project</a>
              </li>
              <li>
                <a href='#key2' className='hp-container-nav-section'>How I built this project</a>
              </li>
              <li>
                <a href='#key3' className='hp-container-nav-section'>Project's features</a>
              </li>
            </ul>
          </div>
          <img 
            src={Illustration3}
            className='hp-content-illustration'
          />
        </div>
        <div className='hp-container-content'>
          <p id='key-message3'>Project's features</p>
          <p id='key-message3-detail'>
            User can:
            <ul>
              <li>Create a new account</li>
              <li>Create/Join groups</li>
              <li>Create channels of a group</li>
              <li>Send messages/files to channels or individuals </li>
            </ul>
          </p>
        </div> 
      </div>
    </div>
  )
}

export default Homepage