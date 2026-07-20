import React from 'react';
import './FullServices.css';

const FullServices = () => {
  return (
    <section className="full-services">
      <div className="container">
        <h4 className="section-subtitle">Serviços Completos</h4>
        <h2 className="section-title">Da estrutura ao acabamento</h2>

        <div className="services-list">
          <div className="service-item">
            <div className="service-icon">🏗️</div>
            <h3>Alvenaria & reboco</h3>
            <p>Paredes, contrapisos e a base sólida que sua reforma precisa.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📐</div>
            <h3>Pisos & azulejos</h3>
            <p>Assentamento com alinhamento milimétrico em porcelanato e cerâmica.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🚪</div>
            <h3>Portas & janelas</h3>
            <p>Instalação com prumo e nível exatos, vedação garantida.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">✨</div>
            <h3>Obra limpa & no prazo</h3>
            <p>Organização, limpeza diária e entrega rigorosamente combinada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullServices;
