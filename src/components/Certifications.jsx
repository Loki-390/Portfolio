import React, { useState } from 'react';
import { Award, Calendar, CheckCircle, X, Eye, Download } from 'lucide-react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy data - REPLACE images with your actual certificate screenshots
  const certs = [
    {
      id: 1,
      title: "Java Full Stack Development",
      issuer: "Oracle University",
      date: "Oct 2025",
      description: "Comprehensive training in Java SE, Spring Boot, Hibernate, and React frontend integration.",
      skills: ["Java", "Spring Boot", "Full Stack"],
      image: "/Logesh.jpg",
    },
    {
      id: 2,
      title: "Google Gen AI Hackathon Winner",
      issuer: "Google",
      date: "Sept 2025",
      description: "Recognized for building 'Smart Health Surveillance' using Gemini API and Flutter.",
      skills: ["Generative AI", "Flutter", "Hackathon"],
    //   image: "https://via.placeholder.com/800x600.png?text=Google+Hackathon+Certificate",
    },
    {
      id: 3,
      title: "Flutter Development Bootcamp",
      issuer: "Udemy / Google Devs",
      date: "Jan 2024",
      description: "Mastered cross-platform mobile app development with Dart and Firebase backend.",
      skills: ["Flutter", "Dart", "Firebase"],
    //   image: "https://via.placeholder.com/800x600.png?text=Flutter+Bootcamp+Certificate",
    }
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <section id="certifications" className="cert-section">
      <div className="cert-container">
        <h2 className="section-title">Certifications & Awards</h2>
        
        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.id} className="cert-card">
              
              {/* Image Preview */}
              {/* <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-img" />
              </div> */}

              {/* Content */}
              <div className="cert-content">
                <div className="cert-header">
                  <div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>

                <div className="cert-body">
                  <div className="cert-date">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="cert-desc">{cert.description}</p>
                  
                  <div className="cert-tags">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="cert-tag">
                        <CheckCircle size={12} /> {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* NEW: Explicit Buttons at Bottom */}
                <div className="cert-actions">
                  {/* View Button - Opens Modal */}
                  <button 
                    className="action-btn view"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <Eye size={18} /> View
                  </button>

                  {/* Download Button - Downloads Image */}
                  <a 
                    href={cert.image} 
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

      {/* MODAL (POPUP) */}
      {selectedImage && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Certificate Preview" className="cert-modal-image" />
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;