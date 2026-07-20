import React from 'react';
import './ServicesOverview.css';

const ServicesOverview = () => {
  return (
    <div className="services-overview">
      <div className="container">
        <div className="services-grid">
          
          <div className="service-card">
            <div className="icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#b2845c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {/* Ícone de Escada de Madeira */}
                <path d="M20 90 V70 H40 V50 H60 V30 H80 V10" stroke="#333" strokeWidth="3"/>
                <path d="M20 90 H40 V70 H60 V50 H80 V30 H100" />
                <path d="M20 70 L20 90 M40 50 L40 70 M60 30 L60 50 M80 10 L80 30" stroke="#333" strokeWidth="3"/>
                {/* Corrimão */}
                <path d="M10 60 L70 0" stroke="#b2845c" strokeWidth="4"/>
                <path d="M20 70 L10 60 M40 50 L30 40 M60 30 L50 20 M80 10 L70 0" stroke="#333" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Escadas de Madeira<br/>Personalizadas</h3>
          </div>
          
          <div className="service-card">
            <div className="icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {/* Ícone de Colher de Pedreiro e Martelo */}
                <path d="M30 70 L70 30" stroke="#b2845c" strokeWidth="8"/>
                <path d="M70 30 L85 45 L95 35 L80 20 Z" fill="#ccc"/>
                <path d="M25 75 L15 85 L25 95 L35 85 Z" fill="#b2845c"/>
                
                <path d="M70 70 L30 30" stroke="#b2845c" strokeWidth="6"/>
                <path d="M20 20 C10 30 10 50 30 50 C50 50 50 10 30 10 Z" fill="#ccc"/>
              </svg>
            </div>
            <h3>Alvenaria, Reboco<br/>e Estruturas</h3>
          </div>
          
          <div className="service-card">
            <div className="icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Ícone de Pisos */}
                <rect x="10" y="10" width="40" height="40" fill="#add8e6" />
                <rect x="55" y="10" width="15" height="15" fill="#add8e6" />
                <rect x="75" y="10" width="15" height="15" fill="#add8e6" />
                <rect x="55" y="30" width="15" height="15" fill="#add8e6" />
                <rect x="75" y="30" width="15" height="15" fill="#add8e6" />
                
                <rect x="10" y="55" width="80" height="35" fill="#b2845c" />
                <path d="M10 70 H90 M10 85 H90" />
                <path d="M30 55 V90 M50 55 V90 M70 55 V90" />
              </svg>
            </div>
            <h3>Assentamento de<br/>Pisos e Azulejos</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
