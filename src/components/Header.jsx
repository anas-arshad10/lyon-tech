import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <a href="/home" className="logo-container">
          <img src="/images/lyon-tech-logo.png" alt="Lyon Logo" className="logo" />
          <h1>Lyon Technologies</h1>
        </a>

        <div className="menu-wrapper">
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a href="/home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
