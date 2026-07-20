import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>+15 anos</h3>
            <p>DE OBRA EM SÃO PAULO</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>PROJETOS SOB MEDIDA</p>
          </div>
          <div className="stat-item">
            <h3>Visita<br/>técnica</h3>
            <p>GRATUITA E SEM<br/>COMPROMISSO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
