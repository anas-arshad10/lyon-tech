import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to Lyon Technologies</h2>
        <p>Discover Lyon Technologies your trusted partner for medical instrumentation and IT solutions.</p>
        <a href="#contact" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
};

export default Hero;