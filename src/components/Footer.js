import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Mahesh G
          </p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/mahesh-g-6bb701203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/Mahesh-Geregouda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="mailto:mahesh.shivakumar06@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



