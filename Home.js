// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Polling App</h1>
      <p>Start creating and participating in polls!</p>
      
      {/* Add links to Login and Register */}
      <div>
        <Link to="/login">Login</Link>
        <span> | </span>
        <Link to="/registration">Register</Link>
      </div>
    </div>
  );
};

export default Home;
