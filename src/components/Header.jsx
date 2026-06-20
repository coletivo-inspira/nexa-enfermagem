import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsappClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um atendimento de enfermagem domiciliar.");
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank'); // Update phone if needed
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo-container">
          <img 
            src="/logo.png" 
            alt="Nexa Enfermagem" 
            className="logo-img" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }} 
          />
          <div className="text-logo" style={{ display: 'none' }}>
            <span className="symbol">❖</span>
            <span className="brand-name">Nexa <span className="sub">Enfermagem</span></span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#manifesto" className="nav-link">Nosso Cuidado</a>
          <a href="#contato" className="nav-link">Contato</a>
          <button onClick={handleWhatsappClick} className="btn btn-primary btn-header">
            <Phone size={16} />
            <span>Agendar Consulta</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#inicio" className="mobile-link" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#servicos" className="mobile-link" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#sobre" className="mobile-link" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#manifesto" className="mobile-link" onClick={() => setIsOpen(false)}>Nosso Cuidado</a>
          <a href="#contato" className="mobile-link" onClick={() => setIsOpen(false)}>Contato</a>
          <button onClick={() => { handleWhatsappClick(); setIsOpen(false); }} className="btn btn-primary btn-mobile-cta">
            <Phone size={18} />
            <span>Agendar via WhatsApp</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
