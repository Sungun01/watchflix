import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt="Background" />
      </div>
      <form className='w-3/12 absolute p-8 bg-black my-40 mx-auto right-0 left-0 text-white rounded-md'>
        <h1 className='font-bold text-3xl mb-4'>Sign In</h1>
        <input type="text" placeholder='Email or mobile Number' className='my-2 p-2 w-full rounded-sm' />
        <input type="password" placeholder='Password' className='my-2 p-2 w-full rounded-sm' />
        <button className='my-2 p-2 bg-red-700 w-full rounded-sm font-bold'>Sign In</button>
      </form>
    </div>
  );
};

export default Login
