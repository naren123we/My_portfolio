import React from "react";
import {Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {

  let date = new Date();
  let year = date.getFullYear();


  return (
  
      <div className="footer">
           <Row className="footer-tag footer-txtclr">
            "Learning, Living, and Leveling Up" 
           </Row>
           <Row className="footer-tag">
            GetinTouch( );
           </Row>
            
           <Col md={12} className="home-about-social">
            
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/naren123we"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="mailto:narendramohanpathak@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/narendra-mohan-pathak-009682230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the_narendra__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>

          <div className="footer-copywright" >
        <div >
          <p>Designed and Developed by Narendra Mohan Pathak</p>
        </div>
        <div>
          <p>Copyright © {year} NP</p>
        </div>
      </div>

        
      </div>


  );
}

export default Footer;
