import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-area">
          <h1 className="logo-title">NILDO ALVES</h1>
          <p className="logo-subtitle">Engenharia & Carpintaria</p>
        </div>
        <nav className="header-nav">
          <a href="#portfolio" className="nav-link">Portfólio</a>
          <a href="#contato" className="btn btn-primary">Solicitar Orçamento Grátis</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
