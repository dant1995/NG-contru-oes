import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact bg-light">
      <div className="container contact-container">
        <div className="contact-text">
          <h4 className="section-subtitle">ATENDIMENTO</h4>
          <h2 className="section-title">Pronto para<br/>começar a sua<br/>obra?</h2>
          <p>
            Atendemos com agilidade em toda São Paulo e Região<br/>
            Metropolitana. Entre em contato e agende uma visita<br/>
            técnica gratuita.
          </p>
        </div>
        
        <div className="contact-box">
          <div className="contact-info-row">
            <span className="contact-label">WHATSAPP</span>
            <span className="contact-value">(11) 92456-1536</span>
          </div>
          <div className="contact-info-row">
            <span className="contact-label">E-MAIL</span>
            <span className="contact-value">Nildoalves03@gmail.com</span>
          </div>
          <div className="contact-info-row">
            <span className="contact-label">ÁREA</span>
            <span className="contact-value">São Paulo e Região</span>
          </div>
          <a href="https://wa.me/5511924561536" className="btn btn-primary btn-block">
            Solicitar orçamento agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
