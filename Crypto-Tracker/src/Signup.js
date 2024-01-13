import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Add password matching logic
    if (password !== confirmpassword) {
      console.error("Passwords don't match");
      return;
    }
  
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
        // Handle successful signup (e.g., redirect to login)
        console.log('Signup successful');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className='auth-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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

        <label htmlFor='confirmpassword'>Confirm Password:</label>
        <input
          type='password'
          id='confirmpassword'
          name='confirmpassword'
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type='submit'>Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default Signup;
