import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Manifesto from './components/Manifesto/Manifesto';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <Services />
        <About />
        <Manifesto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
