import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurImg2 from '../components/OurImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
        <Navbar /> 
        <OurImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About