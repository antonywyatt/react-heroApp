import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/', {
      //para que remplace y no cree history
      replace: true
    })
  }  

  return <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>Login</button>
  </div>;
};
