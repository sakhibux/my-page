import React from 'react'
import Navebar from './components/Navebar'
import Link from 'next/link'
import Hero from './components/Hero'
import Footer from './components/Footer'

const Home= () => {
  return (
    <div>
     
      <Navebar />
      <Hero />
      <Footer />
   
    </div>
  )
}

export default Home
