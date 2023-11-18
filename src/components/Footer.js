// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="brand">
          <h2 style={{ fontSize: "20px", color: "#644860", textAlign: "center" }}>L U X E N E S T</h2><br />
        </div>
        <div className="social-icons">
          &emsp;&emsp;<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="download-app">
          <p style={{ color: "#644860", textAlign: "center" }}>DOWNLOAD OUR APP</p>
          &emsp;<img
            src="https://www.livspace.com/_nuxt/img/play-store.e7c32c7.png"
            alt="Play Store"
            className="app-icon"
          />&emsp;
          <img
            src="https://www.livspace.com/_nuxt/img/app-store.995edd8.png"
            alt="App Store"
            className="app-icon"
          />
        </div>
      </div>
      <div className="company-column">
      <p style={{ color: "#644860"}}>OFFERINGS</p>

          <a href="#" style={{textDecoration:"none",color:"black",lineHeight: "2.0"}}>Interiors</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black",lineHeight: "2.0"}}>Store</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black",lineHeight: "2.0"}}>Magazine</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black",lineHeight: "2.0"}}>Policies</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black",lineHeight: "2.0"}}>Design Ideas</a><br/>

        
      </div>
      <div className="company-column">
      <p style={{ color: "#644860"}}>COMPANY</p>

          <a href="#" style={{textDecoration:"none",color:"black", lineHeight: "2.0"}}>Refer a Friend</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black", lineHeight: "2.0"}}>How it Works</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black", lineHeight: "2.0"}}>Careers</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black", lineHeight: "2.0"}}>Terms and Conditions</a><br/>
          <a href="#" style={{textDecoration:"none",color:"black", lineHeight: "2.0"}}>About Us</a>
        
      </div>
      <div className="footer-right">

        <div className="contact-us">
          <p style={{ color: "#644860", lineHeight: "2.0"}}>CONTACT US</p>
          <p style={{ color: "#644860", lineHeight: "2.0"}}><b>Email us</b><br /> contact@luxenest.com</p>
          <p style={{ color: "#644860", lineHeight: "2.0"}}><b>Call us</b><br /> +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
