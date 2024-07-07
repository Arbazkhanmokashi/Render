// src/pages/SignUp.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend for registration
    console.log('Form submitted:', formData);
    // Redirect to dashboard after successful registration
    history.push('/dashboard');
  };

  return (
    <div>
      <Navbar />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
