import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Activities from '../components/Activities'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
      <About />
      <Activities />
      <Portfolio />
    </div>
  )
}

export default Home