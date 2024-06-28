import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [ isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
      <Header />
      <div className='absolute bg-cover bg-no-repeat'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt="Background" />
      </div>
      <form className='w-[400px] absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl mb-5'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
            <input 
                type="text" 
                placeholder='Name' 
                className='my-2 p-4 w-full rounded-[3px] bg-gray-600 bg-opacity-50 border-[1px]' 
            />
        )}
        <input 
            type="text" 
            placeholder='Email or mobile number' 
            className='my-2 p-4 w-full rounded-[3px] bg-gray-600 bg-opacity-50 border-[1px]' 
        />
        <input 
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
        <button 
            className='my-2.5 p-2 bg-red-700 w-full rounded-[3px] font-bold'>
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
