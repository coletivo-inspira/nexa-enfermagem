import React, { useState } from 'react';
import { Quote, HeartHandshake, Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import './Manifesto.css';

export default function Manifesto() {
  const [activeIndex, setActiveIndex] = useState(0);

  const manifestos = [
    {
      text: "Somos os maiores em número de profissionais na assistência em saúde. Lutamos, ouvimos, choramos, estamos presentes desde o início da vida até ao final dela... Parabéns a todos nós que estamos nessa luta diária fazendo por amor e cuidado!",
      author: "Voz da Enfermagem Nexa",
      role: "Nosso Manifesto"
    },
    {
      text: "Estou convencida de que os maiores heróis são aqueles que fazem o seu dever na rotina diária de assuntos domésticos, enquanto o mundo gira de forma enlouquecedora.",
      author: "Florence Nightingale",
      role: "Pioneira da Enfermagem Moderna"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? manifestos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === manifestos.length - 1 ? 0 : prev + 1));
  };

  const values = [
    {
      title: "Cuidado Humanizado",
      desc: "Um olhar empático e atencioso para cada paciente.",
      icon: HeartHandshake
    },
    {
      title: "Segurança Técnica",
      desc: "Segurança técnica e rigor em todos os procedimentos.",
      icon: Eye
    },
    {
      title: "Excelência Domiciliar",
      desc: "Padrão de qualidade hospitalar na sua residência.",
      icon: Sparkles
    }
  ];

  return (
    <section id="manifesto" className="manifesto-section">
      <div className="container">
        <div className="manifesto-grid">
          
          {/* Quote Carousel */}
          <div className="manifesto-carousel-wrapper glass-card">
            <Quote size={40} className="quote-icon" />
            <div className="manifesto-slider">
              {manifestos.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`slide ${idx === activeIndex ? 'active' : ''}`}
                >
                  <p className="quote-text">"{item.text}"</p>
                  <div className="quote-meta">
                    <span className="author-name">{item.author}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <button onClick={handlePrev} className="control-btn" aria-label="Anterior">
                <ChevronLeft size={20} />
              </button>
              <div className="carousel-dots">
                {manifestos.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
              <button onClick={handleNext} className="control-btn" aria-label="Próximo">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Pillars of Communication */}
          <div className="manifesto-pillars">
            <span className="section-badge">Nossos Valores</span>
            <h2 className="pillars-title">O que nos move diariamente</h2>
            <p className="pillars-subtitle">
              Nossa atuação é baseada em três pilares fundamentais para levar o melhor 
              atendimento possível para a sua família.
            </p>

            <div className="values-list">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="value-item">
                    <div className="value-icon-box">
                      <Icon size={22} />
                    </div>
                    <div className="value-info">
                      <h4>{val.title}</h4>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
