import React from 'react';
import { MessageCircle, ShieldCheck, HeartPulse } from 'lucide-react';
import trabalhandoImg from '../../image/trabalhando.png';
import logoImg from '../../image/logo.png';
import './Hero.css';

export default function Hero() {
  const handleWhatsappClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de atendimento domiciliar da Nexa Enfermagem.");
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <HeartPulse size={16} />
            <span>Atendimento Domiciliar</span>
          </div>
          <h1 className="hero-title">
            Cuidado que <br />
            <span className="gradient-text">vai até você.</span>
          </h1>
          <p className="hero-description">
            A Nexa Enfermagem leva assistência de saúde humanizada, segura e qualificada 
            para o conforto e a tranquilidade do seu lar. Atendimento personalizado em Belo Horizonte.
          </p>
          <div className="hero-actions">
            <button onClick={handleWhatsappClick} className="btn btn-primary btn-lg">
              <MessageCircle size={20} />
              <span>Fale no WhatsApp</span>
            </button>
            <a href="#servicos" className="btn btn-white btn-lg">
              Conhecer Serviços
            </a>
          </div>
          <div className="hero-features">
            <div className="hero-feature-item">
              <ShieldCheck size={20} className="feature-icon" />
              <span>Profissionais Qualificados</span>
            </div>
            <div className="hero-feature-item">
              <HeartPulse size={20} className="feature-icon" />
              <span>Cuidado Humanizado</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="image-wrapper">
            <img 
              src={trabalhandoImg} 
              alt="Profissional de enfermagem Nexa realizando atendimento" 
              className="hero-img" 
              onError={(e) => {
                e.target.src = logoImg;
                e.target.classList.add('fallback-logo');
              }}
            />
            <div className="accent-blob-1"></div>
            <div className="accent-blob-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
