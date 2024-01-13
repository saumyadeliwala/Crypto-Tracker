import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost/Crypto-Tracker/backend/login.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    login: true,
    username: username,
    password: password,
  }),
});

  
      const data = await response.json();
  
      if (data.success) {
        // Handle successful login (e.g., set user session)
        console.log('Login successful');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className='auth-container'>
      <h2>Login</h2>
      <form onSubmit={handleLoginClick}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
      </form>

      <p>
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
