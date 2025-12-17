import React from 'react';
import { Eye, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  // Resume Data - You can duplicate these objects for as many resumes as you have
  const resumes = [
    {
      id: 1,
      category: "Java Full Stack",
      title: "Java Full Stack Developer",
      focus: "Focus: Spring Boot, React, MySQL",
      description: "Best for roles involving end-to-end web application development and enterprise systems.",
      // Using a placeholder image of a document. Replace with a screenshot of your actual resume if you want!
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      file: "/Logesh_Resume.pdf" // Ensure this file is in your public folder
    },
    {
      id: 2,
      category: "Mobile Development",
      title: "Mobile App Developer",
      focus: "Focus: Flutter, Dart, Firebase",
      description: "Tailored for positions focused on building cross-platform mobile applications.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      file: "/resume-mobile.pdf"
    },
    {
      id: 3,
      category: "Backend Engineering",
      title: "Backend Specialist",
      focus: "Focus: Java, API Design, System Architecture",
      description: "Highlights my expertise in database management, API optimization, and scalable logic.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
      file: "/resume-backend.pdf"
    }
  ];

  return (
    <section className="resume-section">
      <div className="resume-container">
        
        {/* Back Button for better UX */}
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <h2 className="section-title">Select Resume Version</h2>
        <p className="section-subtitle">
          I have tailored my experience for different technical roles. Choose the version that fits your needs.
        </p>

        <div className="resume-grid">
          {resumes.map((resume) => (
            <div key={resume.id} className="resume-card">
              
              {/* Top Half: Resume Image Preview */}
              <div className="resume-preview-wrapper">
                <img src={resume.image} alt={resume.title} className="resume-img" />
                <div className="preview-overlay">
                  <span className="category-badge">{resume.category}</span>
                </div>
              </div>

              {/* Bottom Half: Content */}
              <div className="resume-content">
                <h3 className="resume-title">{resume.title}</h3>
                <span className="resume-focus">{resume.focus}</span>
                <p className="resume-desc">{resume.description}</p>

                <div className="resume-actions">
                  {/* View Button */}
                  <a 
                    href={resume.file} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-btn view"
                  >
                    <Eye size={18} /> View
                  </a>

                  {/* Download Button */}
                  <a 
                    href={resume.file} 
                    download 
                    className="action-btn download"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;