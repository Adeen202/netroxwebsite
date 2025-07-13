import React from 'react';
import './Contact.css';
import { FaFacebookF, FaLinkedin, FaXTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../images/logo-footer.png'
import { Link } from 'react-router-dom';
const Contact = () => {
  // Function to open email client
  const handleEmailClick = () => {
    window.location.href = 'mailto:netroxit000@gmail.com';
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Your Solutions Are One Call Away<br />Let’s Reach Out Today!</h2>
        <a href="mailto:netroxit000@gmail.com" className="contact-btn secondary" target="_blank" rel="noopener noreferrer">

          Send Message
        </a>

      </div>


      <div className="contact-right">
        {/* Optional call button to use later */}
        {/* <button className="contact-btn primary">Call Us</button> */}
        <div className="footer-logo">
          <Link to='/' className='navbar-logo'>
            <img src={logo} className='brand' alt="Logo" />
            <span className='logo-text'>NETROXIT</span>
          </Link>
          <p>
            <span>Smart code and bold ideas so you can spend less time fixing <br /> </span>

            <span> problems and more time chasing possibilities.</span>
          </p>

          <div className="social-icons">
            {/*    <FaFacebookF />
<FaPinterestP />
   <FaXTwitter />
*/}
            <a href="https://www.linkedin.com/company/netroxit/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>



            <a href="https://www.instagram.com/netroxit/?igsh=MXNrN3pnbm93Y29yYQ%3D%3D#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>






          </div>
        </div>
      </div>

    </div>
  );
};


export default Contact;
