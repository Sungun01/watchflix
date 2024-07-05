import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector( store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
    })
    .catch((error) => {
      navigate("/error");
    });
  };


  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-30 flex justify-between'>
      <img className='w-36 mx-16'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" 
      />
      {user && (
        <div className='flex items-center mx-16'>
          <img className='w-12 h-12 mx-4' 
            src={user?.photoURL}
            alt="UserIcon" />
          <button className='font-bold text-lg text-white cursor-pointer' onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
    
  )
}

export default Header
