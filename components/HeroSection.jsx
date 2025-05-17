import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-slide active" style={{ backgroundImage: `url('/bg.png')` }}></div>
      <div className="hero-content">
        <h1>Welcome to Our Blog</h1>
        <p style={{ color:'#4e03fc' }}>Explore tips, travel guides, and more.</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
