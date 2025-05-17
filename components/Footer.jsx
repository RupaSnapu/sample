import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>We share travel tips and destination guides.</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MySite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
