import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Reach out for expert solutions and support</p>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Lyon Technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
