import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Projext from './Project/Projext'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Contaact from './Contact/Contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About />
        <Services/>
        <Projext />
        <Skills />
        <Reviews />
        <Contaact />
    </div>
  )
}

export default Home