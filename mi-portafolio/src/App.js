// src/App.jsx

import React, { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume'
import Stats from './components/Stats'
import Services from './components/Services'
import Price from './components/Price'
import HireMe from './components/HireMe'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '../src/public_html/assets/vendors/themify-icons/css/themify-icons.css';
import '../src/public_html/assets/css/johndoe.css';

const App = () => {

  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Resume />
      <Stats />
      <Services />
      <Price />
      <HireMe />
      <Portfolio />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
