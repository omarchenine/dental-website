import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <h1>Dental Clinic</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
}

export default Navbar;
