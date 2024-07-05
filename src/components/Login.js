import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidationData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [ isSignInForm, setIsSignInForm ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =() => {
        // validation of the form data.
        
        console.log(email.current.value);
        console.log(password.current.value);


        const message = checkValidationData( email.current.value, password.current.value );
        setErrorMessage(message);
        if(message) return;

        // sign in sign up login

        if(!isSignInForm){
            // sign up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
                )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://avatars.githubusercontent.com/u/163237723?v=4"
                      })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid, 
                                    email: email, 
                                    displayName: displayName, 
                                    photoURL: photoURL 
                                 })
                            )
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode +"-"+ errorMessage);
                });
        }
        else{
            // sign in logic
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
      <Header />
      <div className='absolute bg-cover bg-no-repeat'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt="Background" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-[400px] absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl mb-5'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
            <input 
                ref = {name}
                type="text" 
                placeholder='Name' 
                className='my-2 p-4 w-full rounded-[3px] bg-gray-600 bg-opacity-50 border-[1px]' 
            />
        )}
        <input 
            ref = {email}
            type="text" 
            placeholder='Email' 
            className='my-2 p-4 w-full rounded-[3px] bg-gray-600 bg-opacity-50 border-[1px]' 
        />
        <input 
            ref = {password}
            type="password" 
            placeholder='Password' 
            className='my-2 p-4 w-full rounded-[3px] bg-gray-600 bg-opacity-50 border-[1px]' 
        />
        {!isSignInForm && ( 
            <input 
                type="password" 
                placeholder='Confirm Password' 
                className='my-2 p-4 w-full rounded-[3px] bg-gray-600 bg-opacity-50 border-[1px]' 
            />
        )}
        <p className='text-lg text-red-500 font-bold py-2'>{errorMessage}</p>
        <button 
            className='my-2.5 p-2 bg-red-700 w-full rounded-[3px] font-bold' onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p 
            className='text-center'>
            OR
        </p>
        <button 
            className='my-2.5 p-2 bg-gray-800 w-full rounded-[3px]'>
            Use a sign-in code
        </button>
        <p 
            className='my-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to WatchFlix? Sign up now" : "Already a User? Sign in now"}
        </p>
        <p className='mt-6 text-xs'>
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
        </p>

      </form>
    </div>
  );
};

export default Login
