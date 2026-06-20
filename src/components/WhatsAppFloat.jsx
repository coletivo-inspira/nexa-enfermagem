import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um atendimento de enfermagem domiciliar com a Nexa Enfermagem.");
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={handleClick} 
      className="whatsapp-float-btn" 
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="tooltip-text">Agende pelo WhatsApp</span>
    </button>
  );
}
