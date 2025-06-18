import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <a href="/home" className="logo-container">
          <img src="/images/lyon-tech-logo.png" alt="Lyon Logo" className="logo" />
          <h1>Lyon Technologies</h1>
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="/home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About Us</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
