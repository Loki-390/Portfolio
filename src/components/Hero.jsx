import React from "react";
import { Link } from "react-router-dom"; // 👈 IMPORT THIS TO FIX THE ERROR
import { Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Left Side: Content */}
      <div className="hero-content">
        {/* Available for Work Badge */}
        <div className="status-badge">
          <Sparkles size={16} className="status-icon" />
          <span>AVAILABLE FOR WORK</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Hi, I'm <span className="highlight-name">Logesh</span>
        </h1>

        <p className="hero-subtitle">
          Software Engineer crafting exceptional digital experiences with modern
          technologies.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="/contact" className="btn-primary">
            <Mail size={18} /> Get in Touch
          </a>
          <Link to="/resume" className="btn-secondary">
            View Resume <FileText size={18} />
          </Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/Loki-390/" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/logeshat2005/" className="social-link">
            <Linkedin size={20} />
          </a>
          <a href="logeshs4605@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hero-image-container">
        <div className="image-wrapper">
          {/* Replace this URL with your actual photo */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
            alt="John Doe"
            className="profile-img"
          />

          {/* Experience Badge */}
          <div className="experience-badge">
            <div className="green-dot"></div>
            <span>Fresher</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
