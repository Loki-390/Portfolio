import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Gets current page URL

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-initials">Loki</span>
        </Link>

        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={isActive("/")} onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")} onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/skills" className={isActive("/skills")} onClick={() => setIsOpen(false)}>Skills</Link>
          </li>
          {/* We will add Projects later */}
          <li>
            <Link to="/projects" className={isActive("/projects")} onClick={() => setIsOpen(false)}>Projects</Link>
          </li>

          <li>
            <Link to="/certifications" className={isActive("/certifications")} onClick={() => setIsOpen(false)}>Certifications</Link>
          </li>

          <li>
            <Link to="/contact" className="contact-btn" onClick={() => setIsOpen(false)}>Contact Me</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;