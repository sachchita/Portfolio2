import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurImg2 from '../components/OurImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar /> 
      <OurImg2 heading= "PROJECT." text="Some of most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project