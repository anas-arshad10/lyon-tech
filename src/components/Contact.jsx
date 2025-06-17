import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Got questions? We're here to help! Reach out to Lyon Technologies today.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message / Comments *</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-button">Let's Talk</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
