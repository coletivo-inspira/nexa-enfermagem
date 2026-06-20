import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Manifesto from './components/Manifesto';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

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
