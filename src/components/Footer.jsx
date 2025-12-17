import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Tagline */}
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            {/* <span className="logo-initials">JD</span> */}
            <span className="logo-text">Logesh S</span>
          </Link>
          <p className="footer-desc">
            Building digital experiences with modern technologies. 
            Focused on creating intuitive, scalable, and performant web applications.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="footer-col">
          <h3 className="footer-heading">Connect</h3>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:logeshs4605@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={20} />
            </a>
          </div>
          <p className="footer-email">logeshs4605@gmail.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Logesh S. All rights reserved.
        </p>
        <div className="built-with">
          <span>Built with React</span>
          <Code2 size={16} className="tech-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;