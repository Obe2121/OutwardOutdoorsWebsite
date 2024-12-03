import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../pages/fish.jpg'; // Adjust path as needed

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/reservations">Reservations</Link>
      </div>
      
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/contact-us">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;