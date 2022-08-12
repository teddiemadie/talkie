import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Logo from './img/logo.png'
import { useCookies } from 'react-cookie';
// import { useStateValue } from './StateProvider'

function Login() {
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');
    const [acceptCookie, setAcceptCookie] = useState('false');
    const [cookies, setCookie] = useCookies(['user']);
    const handleAuthentication = () =>{
        setCookie('Name',userName, {expires: 7,path: '/'});
        setCookie('Password',pwd, {expires: 7,path: '/'});
    }
  return (
    <div className='login'>
        <Link to={'/'}>
            <img className='login-logo'
                src={Logo}
                alt='login logo'
            />
        </Link>
        <div className='login-container'>
            <h1>Sign in</h1>
            
            <form>
                <h5>User name</h5>
                <input 
                    defaultValue={''} 
                    id='login-user-name-input' 
                    className='login-input' 
                    type={'text'}
                    onBlur={(e) => setUserName(e.target.value)}
                />
                <h5>Password</h5>
                <input 
                    defaultValue={''} 
                    id='login-pwd-input' 
                    className='login-input' 
                    type={'password'}
                    onBlur={(e) => setPwd(e.target.value)}
                />
                <div className='login-remember-me'>
                    <input
                        id='login-remember-checkbox' 
                        type={'checkbox'}
                        onClick={() => {
                            acceptCookie === false? setAcceptCookie(true): setAcceptCookie(false);
                            console.log(acceptCookie);
                        }}
                    />
                    <p>Remember me</p>
                </div>
                <button className='login-sign-in-button' onChange={handleAuthentication}>Sign in</button>
            </form>
            <br/>
            {cookies.Name && (
                    <div>
                        Name: <p>{cookies.Name}</p>
                    </div>
            )}
            <p>
            {cookies.Password && (
                    <div>
                        Password: <p>{cookies.Password}</p>
                    </div>
            )}
                Dont have an account? Sign up right here
            </p>
            <Link to={'/register'}>
                <button className='login-register-button'>Create your Talkie account</button>
            </Link>
        </div>
    </div>
  )
}

export default Login