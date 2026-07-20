import React from 'react';
import './Videos.css';

const Videos = () => {
  return (
    <section className="videos">
      <div className="container">
        <h4 className="section-subtitle">NA PRÁTICA</h4>
        <h2 className="section-title">Veja nosso trabalho em detalhes</h2>
        <p className="videos-desc">
          Assista a alguns registros das nossas obras em andamento e detalhes de acabamento.
        </p>

        <div className="videos-grid">
          <div className="video-card">
            <video className="video-player" controls preload="metadata" poster="/assets/images/hero.png">
              <source src="/assets/videos/video1.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            <div className="video-info">
              <h3>Andamento da obra</h3>
            </div>
          </div>

          <div className="video-card">
            <video className="video-player" controls preload="metadata" poster="/assets/images/hero.png">
              <source src="/assets/videos/video2.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            <div className="video-info">
              <h3>Detalhes de estrutura</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
