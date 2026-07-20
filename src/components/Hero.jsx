import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">Deixe a sua casa do jeito<br/>que você sempre sonhou.</h1>
        <p className="hero-description">
          Especialista em reformas residenciais e escadas de<br/>
          madeira exclusivas para o interior do seu lar.
        </p>
        <a href="https://wa.me/5511924561536" className="btn btn-primary hero-btn">
          Fale Direto no WhatsApp: (11) 92456-1536
        </a>
      </div>
    </section>
  );
};

export default Hero;
