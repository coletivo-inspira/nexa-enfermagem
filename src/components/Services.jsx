import React from 'react';
import { HeartPulse, Pill, ClipboardCheck, Activity, Stethoscope, ArrowRight } from 'lucide-react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: 'cuidados',
      title: 'Cuidados de Enfermagem',
      description: 'Assistência geral e acompanhamento contínuo adaptado às necessidades específicas de cada paciente, garantindo conforto e bem-estar.',
      icon: HeartPulse,
    },
    {
      id: 'medicamentos',
      title: 'Administração de Medicamentos',
      description: 'Aplicação segura de medicamentos por via endovenosa, intramuscular, subcutânea ou oral, seguindo rigorosamente a prescrição médica.',
      icon: Pill,
    },
    {
      id: 'curativos',
      title: 'Curativos e Tratamento de Feridas',
      description: 'Realização de curativos simples e complexos com técnicas assépticas modernas para acelerar o processo de cicatrização e evitar infecções.',
      icon: ClipboardCheck,
    },
    {
      id: 'pos-operatorio',
      title: 'Acompanhamento Pós-operatório',
      description: 'Monitoramento de sinais vitais, cuidados com drenos, curativos cirúrgicos e auxílio na recuperação para evitar complicações pós-cirúrgicas.',
      icon: Activity,
    },
    {
      id: 'avaliacao-orientacao',
      title: 'Avaliação e Orientação',
      description: 'Avaliação física geral detalhada do paciente e orientação de familiares sobre cuidados, prevenção de acidentes domésticos e manejo da saúde.',
      icon: Stethoscope,
    },
  ];

  const handleServiceSchedule = (serviceTitle) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar ou tirar dúvidas sobre o serviço de: "${serviceTitle}" domiciliar.`);
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nossos Serviços</span>
          <h2 className="section-title">Como podemos cuidar de você hoje?</h2>
          <p className="section-subtitle">
            Oferecemos uma linha completa de assistência domiciliar para garantir 
            que você e sua família recebam cuidados especializados sem precisar sair de casa.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card glass-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="service-icon-wrapper">
                  <Icon size={28} className="service-icon" />
                </div>
                <h3 className="service-title-text">{service.title}</h3>
                <p className="service-description-text">{service.description}</p>
                <button 
                  onClick={() => handleServiceSchedule(service.title)} 
                  className="service-cta-btn"
                >
                  <span>Agendar Serviço</span>
                  <ArrowRight size={16} className="arrow" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
