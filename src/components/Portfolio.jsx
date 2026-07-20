import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h4 className="section-subtitle">PORTFÓLIO</h4>
        <h2 className="section-title text-light">Quem vê o trabalho, confia.</h2>
        <p className="portfolio-desc">
          Espaço reservado para fotos reais das obras — escadas, reformas e<br/>acabamentos concluídos.
        </p>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="portfolio-img masonry-1"></div>
            <div className="portfolio-tag">FOTO 01 - ESCADA</div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-img masonry-2"></div>
            <div className="portfolio-tag">FOTO 02 - REFORMA</div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-img masonry-3"></div>
            <div className="portfolio-tag">FOTO 03 - PISO</div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-img masonry-4"></div>
            <div className="portfolio-tag">FOTO 04 - ACABAMENTO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
