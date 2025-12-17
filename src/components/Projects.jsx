import React from 'react';
import { Github, ExternalLink, Folder, Code2, Database } from 'lucide-react';

const Projects = () => {
  // Dummy data - You can replace this with an API call later
  const projects = [
    {
      id: 1,
      title: "Online Food Delivery",
      description: "A full-stack online food delivery application featuring user authentication, restaurant listings, menu management and order tracking.",
      tech: ["React", "Spring Boot", "MySQL", "Stripe"],
      github: "https://github.com/Loki-390/Online-Food-Delivery",
      live: "https://demo.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      id: 2,
      title: "Smart Health Surveillance",
      description: "IoT-based health monitoring system that tracks patient vitals and alerts doctors in real-time.",
      tech: ["Flutter", "Python Flask", "Firebase", "IoT"],
      github: "https://github.com/Loki-390/Health-Surveillance-System-",
      live: "https://demo.com",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "A robust REST API for team collaboration tools, supporting role-based access control and real-time updates.",
      tech: ["Java", "Spring Security", "PostgreSQL", "Docker"],
      github: "https://github.com",
      live: null, // Example of a backend-only project (no live link)
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Image Section */}
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="image-overlay">
                  <Folder size={40} color="white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content Section */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;