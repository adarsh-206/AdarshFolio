import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div class="footer">
          <div class="footer-column">
            <h3>Phone Number</h3>
            <p>+91 - 8878308624</p>
          </div>
          <div class="footer-column">
            <h3>Email Address</h3>
            <p>adarshdhote8624@gmail.com</p>
          </div>
          <div class="footer-column">
            <h3>Follow Me</h3>
            <div className='socialIcon'>
                <SocialIcon className='social-icon' url="https://www.linkedin.com/in/adarsh-dhote" bgColor="#0077B5" style={{ height: 22, width: 22, margin: '0 5px' }} target="_blank" />
                <SocialIcon className='social-icon' url="https://github.com/adarsh-206" bgColor="#333" style={{ height: 22, width: 22, margin: '0 5px' }} target="_blank" />
                <SocialIcon className='social-icon' url="https://www.instagram.com/adarsh_206_" bgColor="#E1306C" style={{ height: 22, width: 22, margin: '0 5px' }} target="_blank" />
                <SocialIcon className='social-icon' url="https://wa.me/+918878308624" bgColor="#25D366" style={{ height: 22, width: 22, margin: '0 5px' }} target="_blank" />
            </div>
          </div>
          <div class="footer-column">
            <p>Made with 
            <span class="heart" onmouseover="this.classList.add('pulsate');" onmouseout="this.classList.remove('pulsate');"> ❤️ </span>
            </p>
            <p>By Adarsh Dhote</p>
          </div>
       </div>
  )
}

export default Footer;