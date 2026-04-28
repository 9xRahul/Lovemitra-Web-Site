import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Safety from '../components/Safety';
import AppPreview from '../components/AppPreview';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AppPreview />
      <Safety />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
