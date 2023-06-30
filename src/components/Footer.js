import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch, FaTwitter } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color : '#fff', marginRight: "2rem"}} />
                    <div>
                        <p> B.Channasandra Bangalore-43</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color : '#fff', marginRight: "2rem"}} />
                    +91 800 93 635 75
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color : '#fff', marginRight: "2rem"}} />
                   sachchitanandk52@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me </h4>
                <p>I am Sachchitanand. I am a front-end developer. I have a year of experience in web development.</p>
                    <div className="social">
                    <FaFacebook size={30} style={{color : '#fff', marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color : '#fff', marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color : '#fff', marginRight: "1rem"}} />
                    
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer