import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurImg2 from '../components/OurImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar /> 
        <OurImg2 heading='CONTACT.' text='Lets have a chat.' />
        <Form />
      <Footer />
    </div>
  )
}

export default Contact