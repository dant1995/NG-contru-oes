import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>Contato: (11) 92456-1536 | E-mail: Nildoalves03@gmail.com</p>
        <p className="copyright">© 2026 NILDO ALVES - ENGENHARIA & CARPINTARIA - SÃO PAULO / SP</p>
      </div>
      
      {/* Botão flutuante do WhatsApp */}
      <a href="https://wa.me/5511924561536" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path d="M16 2.5a13.5 13.5 0 0 0-11.4 20.7L2.5 30l7-2.1A13.5 13.5 0 1 0 16 2.5zm0 2.2a11.3 11.3 0 0 1 9.6 17.3l-1.3 2.1-4.2 1.3A11.3 11.3 0 1 1 16 4.7zm-4.3 6.1c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6 1.2 3 1.3 3.2 2.2 3.4 5.3 4.7c2 .8 2.6.9 3.5.8.8-.1 2.5-1 2.8-2s.3-1.8.2-2c-.1-.2-.4-.3-.8-.5s-2.5-1.2-2.8-1.4-.6-.2-.9.2-1.1 1.4-1.3 1.6-.5.2-.9 0-1.8-.7-3.4-2.1c-1.3-1.1-2.1-2.5-2.4-2.9s-.1-.6.2-.8c.2-.2.4-.4.5-.6s.2-.4.3-.6.1-.4 0-.7-.9-2.2-1.3-3c-.3-.8-.7-.7-1-.7h-.8z" fill="#fff"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
