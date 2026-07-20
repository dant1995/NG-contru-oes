import React from 'react';
import './Specialties.css';

const Specialties = () => {
  return (
    <section className="specialties">
      <div className="container">
        <h4 className="section-subtitle">Especialidade</h4>
        <h2 className="section-title">Escadas de madeira sob medida</h2>
        <p className="specialties-desc">
          Projetamos e executamos escadas personalizadas para o interior da<br/>
          sua casa. Madeiras selecionadas, cortes precisos e acabamento<br/>
          impecável em verniz.
        </p>

        <div className="models-grid">
          <div className="model-card">
            <div className="model-img" style={{ backgroundImage: "url('/assets/images/escada1.jpg')" }}></div>
            <div className="model-info">
              <span className="model-tag">MODELO - 01</span>
              <h3>Escada suspensa de madeira</h3>
              <p>Degraus flutuantes com estrutura central metálica, para ambientes modernos e minimalistas.</p>
            </div>
          </div>
          
          <div className="model-card">
            <div className="model-img" style={{ backgroundImage: "url('/assets/images/escada2.jpg')" }}></div>
            <div className="model-info">
              <span className="model-tag">MODELO - 02</span>
              <h3>Escada em granito escuro</h3>
              <p>Estrutura elegante com iluminação embutida e corrimão de vidro para sofisticação total.</p>
            </div>
          </div>

          <div className="model-card">
            <div className="model-img" style={{ backgroundImage: "url('/assets/images/escada3.jpg')" }}></div>
            <div className="model-info">
              <span className="model-tag">MODELO - 03</span>
              <h3>Detalhe estrutural</h3>
              <p>Visualização da estrutura metálica moderna que sustenta degraus com altíssima segurança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
