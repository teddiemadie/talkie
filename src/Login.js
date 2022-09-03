import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios';
import Logo from './img/logo.png'
import { useCookies } from 'react-cookie';
// import { useStateValue } from './StateProvider'

function Login() {
    const navigate = useNavigate();
    const [firstLogin, setFirstLogin] = useState();
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');
    const [sessionID, setSessionID] = useState('');
    const [token, setToken] = useState('');
    const [expiredDate, setExpiredDate] = useState('');
    const [acceptCookie, setAcceptCookie] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    
    const handleAuthentication = async (e) =>{
        // let expiresDay = new Date('2023-08-13 23:59:59');
        // setCookie('Name',userName, {expires: expiresDay, path: '/'});
        // setCookie('Password',pwd, {expires: expiresDay, path: '/'});
        // console.log('userName',userName);
        // console.log('pwd',pwd);
        e.preventDefault();
        const res = await axios.get(
            "http://18.182.16.178/users/" + userName 
        );
        console.log('res', res.data);
        console.log('hello');
        if(pwd === res.data[0].pwd){
            console.log('pwd true');
            const session_res = await axios.get(
                "http://18.182.16.178/users/"+ userName +"/session"
            );
            console.log(session_res.data);
            // console.log(session_res.data.length);
            //create session id and token
            if(session_res.data.length === 0){
                console.log('token aint exist');
                setFirstLogin(true);
                //create new session id and token
                const res = await axios.post(
                    "http://18.182.16.178/users/"+ userName +"/session"
                );
                //if user accepted cookie, call session storage api and save cookie info(session id + token + expiration) then redirect to user home
                //else: redirect to user home
                if (acceptCookie === true){
                    const session_res = await axios.get(
                        "http://18.182.16.178/users/"+ userName +"/session"
                    );
                    setSessionID(session_res.data[0].session_id);
                    setToken(session_res.data[0].token);
                    setExpiredDate(new Date(session_res.data[0].expired_time));
                    setCookie("Session ID", sessionID, {expires: expiredDate, path: '/'});
                    setCookie("Token", token, {expires: expiredDate, path: '/'});
                    navigate(`/${userName}`, {replace: true});
                }else{
                    navigate(`/${userName}`, {replace: true});
                }
                
            }else {
                setFirstLogin(false);
                if (cookies){
                    navigate(`/${userName}`, {replace: true});
                }else {
                    navigate("/login", {replace: true});
                }
                //if cookies is still valid, keep logged in state
                //else: redirect to login 
                // const res = await axios.post(
                //     "http://18.182.16.178/users/"+ userName + "/session/update",
                //     [userName]
                // );
                // console.log(res.data);
                // console.log("token is updated");
            }

            // if(acceptCookie === true){
            //     const updatedsession_res = await axios.get(
            //         "http://18.182.16.178/users/"+ userName +"/session"
            //     );
            //     setSessionID(updatedsession_res.data[0].session_id);
            //     setToken(updatedsession_res.data[0].token);
            //     setExpiredDate(new Date(updatedsession_res.data[0].expired_time));
            //     setCookie("Session ID", sessionID, {expires: expiredDate, path: '/'});
            //     setCookie("Token", token, {expires: expiredDate, path: '/'});
            //     console.log('session id', sessionID);
            //     console.log('token', token);
            //     console.log('expired date', expiredDate);
                
            // }else{
            //     console.log("acceptcookie",acceptCookie);
            // }
            // navigate("/", { replace: true });
        }else {
            console.log('pwd wrong',pwd)
        }
    }
    // useEffect(()=>{
    //     handleAuthentication();
    // })
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
                    onChange={(e) =>setUserName(e.target.value)}
                />
                <h5>Password</h5>
                <input 
                    defaultValue={''} 
                    id='login-pwd-input' 
                    className='login-input' 
                    type={'password'}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <div className='login-remember-me'>
                    <input
                        id='login-remember-checkbox' 
                        type={'checkbox'}
                        defaultChecked=''
                        value={acceptCookie}
                        onClick={(e) => {
                            // acceptCookie === false? setAcceptCookie(true): setAcceptCookie(false);
                            if(acceptCookie===false){
                                setAcceptCookie(true);
                                console.log(acceptCookie);
                            }else{
                                setAcceptCookie(false)
                                console.log(acceptCookie);
                            }
                        }}
                    />
                    <p>Remember me</p>
                </div>
                <button className='login-sign-in-button' onClick={handleAuthentication}>Sign in</button>
            </form>
            <p>
                Dont have an account? Sign up right here
            </p>
            <Link to={'/register'}>
                <button className='login-register-button'>Create your Ally account</button>
            </Link>
        </div>
    </div>
  )
}

export default Login