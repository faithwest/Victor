I// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Home Page</h1>
      <p>This is a simple React home page.</p>
      <img
        src="https://placekitten.com/800/400" 
        alt="Cute Kitten"
      />
    </div>
  );
};

export default Home;

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
