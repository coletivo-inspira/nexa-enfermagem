import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../image/logo.png';
import './Footer.css';

export default function Footer() {
  const handleWhatsappClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um atendimento domiciliar.");
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
  };

  return (
    <footer id="contato" className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <img 
              src={logoImg} 
              alt="Nexa Enfermagem Logo" 
              className="footer-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="footer-text-logo" style={{ display: 'none' }}>
              <span className="logo-symbol">❖</span>
              <h4>Nexa Enfermagem</h4>
            </div>
          </a>
          <p className="footer-tagline">"Cuidado que vai até você."</p>
          <p className="footer-desc">
            Levar assistência com empatia, excelência técnica e dedicação para dentro do seu lar é a nossa principal missão.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#manifesto">Nosso Cuidado</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contatos e Agendamentos</h4>
          <ul className="contact-info-list">
            <li>
              <MapPin size={18} className="info-icon" />
              <span>Belo Horizonte, MG, Brasil</span>
            </li>
            <li>
              <Mail size={18} className="info-icon" />
              <a href="mailto:italo.drock@gmail.com">italo.drock@gmail.com</a>
            </li>
            <li>
              <Instagram size={18} className="info-icon" />
              <a href="https://instagram.com/nexaenfermagem" target="_blank" rel="noopener noreferrer">@nexaenfermagem</a>
            </li>
            <li>
              <Phone size={18} className="info-icon" />
              <span className="clickable" onClick={handleWhatsappClick}>Agendamento via WhatsApp</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="legal-text">
            © {new Date().getFullYear()} Nexa Enfermagem. Todos os direitos reservados.
          </p>
          <p className="responsibility-text">
            Responsável Técnico: Enf. Ítalo Coelho • COREN-MG
          </p>
        </div>
      </div>
    </footer>
  );
}
