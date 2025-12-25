import React from 'react';
// Added new icons: Palette, Cpu, Briefcase
import { Layout, Server, Database, Palette, Cpu, Briefcase } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} className="text-blue-400" />,
      skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Logesh"]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} className="text-purple-400" />,
      skills: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database & Tools",
      icon: <Database size={24} className="text-green-400" />,
      skills: ["MySQL", "MongoDB", "Git/GitHub", "Docker", "Postman"]
    }, // <--- Comma added here
    {
      title: "UI/UX & Design",
      icon: <Palette size={24} className="text-pink-400" />, // Changed Icon & Color
      skills: ["Figma", "UX Principles", "Design Systems", "User-centric Design"]
    }, // <--- Comma added here
    {
      title: "Core Computer Science",
      icon: <Cpu size={24} className="text-orange-400" />, // Changed Icon & Color
      skills: ["Object-Oriented Programming (OOPS)", "Data Structures & Algorithms", "Time & Space Complexity", "Problem Solving", "Debugging"]
    }, // <--- Comma added here
    {
      title: "Business & Professional",
      icon: <Briefcase size={24} className="text-yellow-400" />, // Changed Icon & Color
      skills: ["Business Logic", "Requirement Analysis", "Process Flow Design", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="card-header">
                <div className="icon-box">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="bullet-point"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;