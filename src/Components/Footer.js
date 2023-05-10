import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons'
import {faComputer}  from '@fortawesome/free-solid-svg-icons'
import {faEarthAfrica}  from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><FontAwesomeIcon icon={faSliders}   size="xs" /> SKILLS  </h2>
            <p >Team Work</p>
            <p>Decision Making</p>
            <p >Attention to Detail</p>
            <p > Communication Skills</p>
            <p >Terms of Service</p>
          </div>
          <div class='footer-link-items'>
            <h2><FontAwesomeIcon icon={faComputer}  /> SOFTWARES  </h2>
            <p >Visual Studio</p>
            <p >CST / HFSS</p>
            <p >Cisco Packet Tracer</p>
            <p >MATLAB</p>
            <p >AutoCAD</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><i class="fas fa-language  "/> LANGUAGES </h2>
            <p >Arabic &nbsp;➲ Native</p>
            <p >English ➲ Fluent</p>
            
          </div>
          <div class='footer-link-items'>
            <h2><FontAwesomeIcon icon={faEarthAfrica} /> CURRENT RESIDENCE </h2>
            <p >LEBANON</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          
          <div class='social-icons'>
            
            <a
              to='/'
              target='_blank'
              className="soc">
              <i class='fab fa-instagram' />
            </a>
            <a
              href="mailto:ahmad.itanii@outlook.com" 
              target='_blank'
              className="soc">
              <i class="far fa-envelope"/>
            </a>
            
            <a
               href="https://www.linkedin.com/in/ahmad-itani-1a8910211/"
              className="soc"
              target='_blank'>
              <i  class='fab fa-linkedin ' />
            </a>
            <a
              href="Ahmad Itani CV.pdf"   download
              target='_blank'>
                <img   src="/images/cv.png" href="Ahmad Itani CV.pdf" className="cv"  download alt=""/>
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
