import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin, Linkedin, Mail } from 'lucide-react';
import perfilSerioImg from '../image/perfil_serio.png';
import logoImg from '../image/logo.png';
import './About.css';

export default function About() {
  const skills = [
    'Enfermagem Geral',
    'Terapia Intravenosa',
    'Certificação PICC (Cateter Central de Inserção Periférica)',
    'Acolhimento Humanizado',
    'Urgência e Emergência'
  ];

  const experiences = [
    {
      role: 'Enfermeiro Domiciliar',
      company: 'Saúde no Lar Gestão de Saúde',
      period: '2022 - Presente',
    },
    {
      role: 'Enfermeiro',
      company: 'Sansim Serviços Médicos',
      period: '2021',
    },
    {
      role: 'Estágio SCIH (Controle de Infecção)',
      company: 'FHEMIG (Hospital João XXIII)',
      period: '2017 - 2019',
    }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container about-container">
        <div className="about-media">
          <div className="profile-image-container">
            <img 
              src={perfilSerioImg} 
              alt="Enfermeiro Ítalo Coelho" 
              className="profile-img main"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback image */}
            <img 
              src={logoImg} 
              alt="Nexa Enfermagem" 
              className="profile-img fallback" 
              style={{ display: 'none', padding: '30px', backgroundColor: '#fff' }}
            />
            <div className="experience-badge">
              <span className="years">4+ Anos</span>
              <span className="text">Experiência</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-badge">Quem Somos</span>
          <h2 className="about-title">Gestão e Responsabilidade Técnica</h2>
          <h3 className="nurse-name">Enf. Ítalo Coelho</h3>
          <p className="nurse-role">Supervisor e Enfermeiro Responsável • COREN-MG</p>

          <p className="about-text">
            Bacharel em Enfermagem pela FAMINAS-BH e Pós-Graduando em Urgência, Emergência, 
            Terapia Intensiva e Trauma pelo ICTQ. Possui sólida experiência hospitalar e em 
            atenção primária, focando na excelência técnica combinada ao acolhimento e ao 
            cuidado humanizado.
          </p>

          <div className="location-info">
            <MapPin size={18} className="location-icon" />
            <span>Belo Horizonte, Minas Gerais, Brasil</span>
          </div>

          <div className="accordion-grid">
            <div className="accordion-item">
              <div className="item-header">
                <Award size={18} className="item-icon" />
                <h4>Competências e Habilidades</h4>
              </div>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <Briefcase size={18} className="item-icon" />
                <h4>Trajetória Profissional</h4>
              </div>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <span className="timeline-period">{exp.period}</span>
                    <h5 className="timeline-role">{exp.role}</h5>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-socials">
            <a href="https://www.linkedin.com/in/italo-coelho-a8055b1b3/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn Profile">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:italo.drock@gmail.com" className="social-btn email" aria-label="Send Email">
              <Mail size={18} />
              <span>italo.drock@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
