import React, { useState } from 'react'
import Modal from 'react-modal';
import './Register.css'
import Logo from './img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Video from './img/coperate.mp4'
import TermAndPrivacy from './TermAndPrivacy';

function Register() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameIsValid, setUserNameIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [confirmPasswordIsMatched, setConfirmPasswordIsMatched] = useState(false);
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const checkValidUserName = async (e) =>{
        const res = await axios.get(
            "http://18.182.16.178/users"
        )
        const map_data = new Map(
            res.data.map(o => {
                return [o.name];
            })
        )
        // console.log('map',map_data); 
        if (!map_data.has(e.target.value) && e.target.value.length < 10){
            e.target.style.border = "1px solid #04AA6D";
            setUserName(e.target.value);
            setUserNameIsValid(true);
            document.getElementById('alert1').innerHTML = "";
        }else{
            e.target.style.border = "1px solid #f44336";
            if (map_data.has(e.target.value)) {
                document.getElementById("alert1").innerHTML = "User name already exists";
            }else{
                document.getElementById("alert1").innerHTML = "User name has more than 10 characters";
            }
            setUserName("");
            setUserNameIsValid(false);
        }
        e.preventDefault();
    }

    const checkValidPassword = e =>{
        const letter = document.getElementById('letter');
        const capital = document.getElementById("capital");
        const number = document.getElementById("number");
        const special = document.getElementById("special");
        const length = document.getElementById("length");
        const lowerCaseLetters = /[a-z]/g;
        const upperCaseLetters = /[A-Z]/g;
        const numbers = /[0-9]/g;
        const specialLetters =  /[!@#$%&*()_+\-=\]{};':"\\|,.<>?]/g;
        //validate lowercase letters
        if(e.target.value.match(lowerCaseLetters)){
            letter.classList.add('valid');
        }else{
            letter.classList.remove('valid');
        }
        //validate uppercase letters
        if(e.target.value.match(upperCaseLetters)){
            capital.classList.add('valid');
        }else{
            capital.classList.remove('valid');
        }
        //validate numbers
        if(e.target.value.match(numbers)){
            number.classList.add('valid');
        }else{
            number.classList.remove('valid');
        }
        //validate special letters
        if(e.target.value.match(specialLetters)){
            special.classList.add('valid');
        }else{
            special.classList.remove('valid');
        }
        //validate length
        if(e.target.value.length >= 8){
            length.classList.add('valid');
        }else{
            length.classList.remove('valid');
        }
    }
    const setValidPassword = e =>{
       //return valid password
       //test key: abcD0000@
        if(document.getElementsByClassName('valid').length === 5){
            console.log("VALID PASSWORD");
            e.target.style.border = "1px solid #04AA6D";
            document.getElementById('alert2').innerHTML = "";
            setPassword(e.target.value);
            setPasswordIsValid(true);
        }else{
            e.target.style.border = "1px solid #f44336";
            document.getElementById('alert2').innerHTML = "Invalid password";
            setPassword("");
            setPasswordIsValid(false);
        }
        e.preventDefault();
    }
    const showOrHidePassword = e =>{
        if(document.getElementById('psw1').type === 'password'){
            document.getElementById('psw1').type = "text";
            e.target.innerHTML = "HIDE";
        }else{
            document.getElementById('psw1').type = "password";
            e.target.innerHTML = "SHOW";

        }
    }

    const checkConfirmedPassword = e =>{
        if (e.target.value === password){
            document.getElementById('alert3').innerHTML = "";
            e.target.style.border = "1px solid #04AA6D";
            setConfirmPasswordIsMatched(true);
        }else{
            document.getElementById('alert3').innerHTML = "Password aint matched";
            e.target.style.border = "1px solid #f44336";
            setConfirmPasswordIsMatched(false);
        }
    }
    const showTermAndPrivacy = () =>{
        setModalIsOpen(true);
    }
    const closeTermAndPrivacy = () =>{
        setModalIsOpen(false);
    }
    const signUp = async e => {
        if(userNameIsValid===true && passwordIsValid===true && confirmPasswordIsMatched===true){
            //testkey: hihi abcD0000@
            console.log('register successfully');
            navigate("/login", { replace: true });
            const req = await axios.post(
                "http://18.182.16.178/users",
                {'name':userName,'pwd':password}
            );
            document.getElementById('login-user-name-input').value = userName;
            document.getElementById('login-pwd-input').value = password;
        }else {
            console.log('register failed');
        }
        e.preventDefault();
    }
  return (
    <div className='register'>
        <div className='register-welcome'>
            <img className='register-logo'
                src={Logo}
                alt='login logo'
            />
            <p>Welcome to</p>
            <h1>Ally</h1>
            {/* <p>Make teamwork easy than ever</p> */}
            <video className='register-video' width='200' height='200' loop autoPlay muted>
                <source src={Video} type='video/mp4'/>
            </video>
        </div>
        <div className='register-container'>
            <h1>Sign up</h1>

            <form>
                <h5>User name <span id='alert1' className='register-alert'></span></h5>
                <input
                    className='register-input'
                    type={'text'} 
                    onBlur={checkValidUserName}
                />
                <p>Must have less than 10 characters</p>
                <h5>Password <span id='alert2' className='register-alert'></span></h5>
                <div className='register-pwd-input-container'>
                    <input
                        className='register-input'
                        id='psw1' 
                        type='password' 
                        onChange={checkValidPassword} 
                        onBlur={setValidPassword} 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    />
                    <p className='register-show-pwd' onClick={showOrHidePassword}>SHOW</p>
                </div>
                <p className='validation'>
                    Password must contain 
                    <span id='length'> at least 8 characters </span>
                    including <span id='letter'>a lowercase letter</span>,
                    <span id='capital'> a capital letter</span>,
                    <span id='number'> a number </span>
                    and <span id='special'>a special character</span>
                </p>
                <h5>Confirm Password <span id='alert3' className='register-alert'></span></h5>
                <input
                    className='register-input'
                    id='pwd2' 
                    type={'password'} 
                    onChange={checkConfirmedPassword}
                />
                <Link to={'/'}>
                    <button className='register-button cancle-button'>Cancel</button>
                </Link>
                <button className='register-button' onClick={signUp}>Sign up</button>
                <p className='register-agreement'>
                    By creating an account, you agree to our
                    <a 
                        href="#agreement" 
                        onClick={showTermAndPrivacy}> Terms & Privacy
                    </a>.
                </p>
            </form>
            <Modal
                isOpen={modalIsOpen} 
                onRequestClose={closeTermAndPrivacy} 
                className='modal'
            >
                <button onClick={closeTermAndPrivacy}>x</button>
                <TermAndPrivacy/>
            </Modal>
        </div>
        
    </div>
  )
}

export default Register