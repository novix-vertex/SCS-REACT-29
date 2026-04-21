import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FactsCards from './components/FactsCards'
import FactsNumbers from './components/FactsNumbers'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FactsCards />
      <FactsNumbers />
      <Services />
    </div>
  )
}

export default App