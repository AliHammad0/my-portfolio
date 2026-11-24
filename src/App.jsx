
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Pages/Header'
import Footer from './Pages/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import OurWork from './Pages/OurWork'
import Contact from './Pages/Conatct'
import Projects from './Pages/Projects'
import Pricing from './Pages/Pricing'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Pricing />} />
      </Routes>
      <Contact/>

      <Footer />
    </div>
  )
}

export default App
