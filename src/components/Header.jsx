import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="/home" className="logo-container">
          <img src="/images/lyon-tech-logo.png" alt="Lyon Logo" className="logo" />
          <h1>Lyon Technologies</h1>
        </a>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#8942;
        </div>

        {/* Navigation Links */}
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
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
