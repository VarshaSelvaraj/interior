import React from 'react';

import './Contact.css'; // Import your CSS file
import NavBar from './Navbar';

const ContactUs= () => {
  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="my-custom-row">
        <div className="Hero Parallax aa-contact-us-page-hero-image col-xs-12">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h2>Contact Us</h2>
              <h3>"Ready to transform your space with our expert design services? Contact us now to bring your dream interior to life, and we welcome your feedback to help us create the perfect ambiance!"</h3>
            </div>
          </div>
          <a className="contact-form-anchor-link" href="#contact-form"> {/* Added href attribute */}
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-angle-down fa-stack-1x" style={{ fontSize: '1.5em' }}></i>
            </span>
          </a>
        </div>
      </div>
      <div className="contact-background">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="contact-form-box"> {/* Added a container for the form */}
              <h2>Get in Touch</h2>
              <form id="contact-form" name="contact_form" action="contact-mail.php" method="post">
              <div className="form-group">
 
  <input
    type="text"
    className="form-control"
    id="name"
    placeholder="Your Name"
    name="name"
  />
</div>
<div className="form-group">
 
  <input
    type="email"
    className="form-control"
    id="email"
    placeholder="E-mail"
    name="email"
    required
  />
</div>
<div className="form-group">
 
  <input
    type="text"
    className="form-control"
    id="phone"
    placeholder="Phone Number"
    name="phone"
  />
</div>
<div className="form-group">
  
  <input
    type="text"
    className="form-control"
    id="subject"
    placeholder="Feedback if any"
    name="subject"
  />
</div>
<div className="form-group">
  
  <textarea
    className="form-control"
    id="message"
    placeholder="Your Message"
    name="message"
  ></textarea>
</div>

                <div className="form-group single-input-fieldsbtn">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Send Now"
                  />
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
      <br/>
     
    </div>
  );
};

export default ContactUs;
