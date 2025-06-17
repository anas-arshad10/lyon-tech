import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero id="home" /> {/* Added id for home link */}
        <AboutUs id="about" />
        <Services id="services" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      
      </main>
      <Footer />
    </div>
  );
}

export default App;