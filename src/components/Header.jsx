import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/home" className="logo-container">
          <img src="/images/lyon-tech-logo.png" alt="Lyon Logo" className="logo" />
          <h1>Lyon Technologies</h1>
        </a>
        <nav>
          <a href="/home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
