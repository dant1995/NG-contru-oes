import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import About from './components/About';
import Specialties from './components/Specialties';
import FullServices from './components/FullServices';
import Videos from './components/Videos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <About />
        <Specialties />
        <FullServices />
        <Stats />
        <Videos />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
