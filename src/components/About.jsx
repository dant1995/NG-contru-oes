import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-ribbon">
      <div className="container about-container">
        
        {/* Gráfico Decorativo (Martelo e Tijolos) flutuante */}
        <div className="floating-hammer">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Martelo */}
            <path d="M40 70 L70 40" stroke="#b2845c" strokeWidth="8"/>
            <path d="M70 40 L85 55 L95 45 L80 30 Z" fill="#ccc"/>
            {/* Tijolos */}
            <rect x="10" y="80" width="30" height="15" fill="#b2845c" />
            <rect x="42" y="80" width="30" height="15" fill="#b2845c" />
            <rect x="25" y="63" width="30" height="15" fill="#b2845c" />
            <rect x="57" y="63" width="15" height="15" fill="#b2845c" />
          </svg>
        </div>

        <div className="about-left">
          {/* Foto do Nildo - O usuário precisa colocar nildo.png */}
          <div className="nildo-photo">
            <img src="/assets/images/nildo.png" alt="Nildo Alves" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-nildo'); }} />
          </div>
          
          <div className="about-text">
            <h2>Sobre Nós & Galeria</h2>
            <p>Atendendo com qualidade e<br/>compromisso em São Paulo.</p>
          </div>
        </div>

        <div className="about-right">
          <div className="gallery-thumb" style={{backgroundImage: "url('/assets/images/hero.png')"}}></div>
          <div className="gallery-thumb" style={{backgroundImage: "url('/assets/images/model1.png')"}}></div>
          <div className="gallery-thumb" style={{backgroundImage: "url('/assets/images/model2.png')"}}></div>
        </div>

      </div>
    </div>
  );
};

export default About;
