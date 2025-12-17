import React from "react";
import { BookOpen, Code, User, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Title */}
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* Left Side: The Story */}
          <div className="about-content">
            <h3 className="about-subtitle">
              <User className="icon-blue" size={24} /> Who I Am
            </h3>
            <p>
              I am a final-year{" "}
              <strong>B.Tech student in AI & Data Science</strong> at
              <span className="highlight-text">
                {" "}
                Dhirajlal Gandhi College of Technology
              </span>
              , based in Salem, Tamil Nadu.
            </p>
            <p>
              My journey began with a curiosity for how things work, which
              evolved into a passion for
              <strong> Java Full Stack Development</strong>. I love bridging the
              gap between complex backend logic (Spring Boot) and interactive
              user interfaces (React).
            </p>
            <p>
              I am passionate about learning new technologies, improving my
              problem-solving skills, and understanding. I focus on writing
              clean code, following best practices, and continuously upgrading
              my skills through hands-on projects. I am eager to grow in a
              professional environment where I can contribute, learn, and evolve
              as a developer.
            </p>

            <p>
              When I'm not coding, you can find me solving DSA problems,
              exploring new tech stacks like Flutter, or participating in
              hackathons to build real-world solutions.
            </p>

            {/* Quick Stats Grid */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2026</span>
                <span className="stat-label">Graduation Year</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Languages Spoken</span>
              </div>
            </div>
          </div>

          {/* Right Side: Education & Focus Card */}
          <div className="education-card">
            <h3 className="about-subtitle">
              <BookOpen className="icon-purple" size={24} /> Education
            </h3>

            {/* College */}
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="year">2022 - 2026</span>
                <span className="score-badge">CGPA: 8.5</span>{" "}
                {/* REPLACE THIS */}
              </div>
              <h4>B.Tech - AI & Data Science</h4>
              <p className="school">Dhirajlal Gandhi College of Technology</p>
            </div>

            {/* 12th Grade */}
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="year">2022</span>
                <span className="score-badge">HSC: 80%</span>{" "}
                {/* REPLACE THIS */}
              </div>
              <h4>Higher Secondary (12th)</h4>
              <p className="school">Government School, Salem</p>
            </div>

            {/* 10th Grade */}
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="year">2020</span>
                <span className="score-badge">SSLC: 79%</span>{" "}
                {/* REPLACE THIS */}
              </div>
              <h4>Secondary School (10th)</h4>
              <p className="school">Government School, Salem</p>
            </div>

            <div className="divider"></div>

            <h3 className="about-subtitle" style={{ marginTop: "20px" }}>
              <Code className="icon-green" size={24} /> Current Focus
            </h3>
            <div className="focus-tags">
              <span className="tag">Full Stack Development</span>
              <span className="tag">System Design</span>
              <span className="tag">Mobile Application Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
