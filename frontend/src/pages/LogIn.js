// src/pages/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import Navbar from '../components/Navbar';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      history.push('/dashboard');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
