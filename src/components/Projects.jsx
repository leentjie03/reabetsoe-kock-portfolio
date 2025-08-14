import React from 'react';
import '../styles/projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Showcase of my projects and skills as a developer.',
      features: [
        'Responsive design for all devices',
        'Smooth scrolling and animations'
      ],
      tech: ['React', 'JavaScript'],
      liveDemo: '#',
      sourceCode: '#',
      image: 'public/images/portfolio.jpg'
    },
    {
      title: 'Black Brew Coffee Club',
      description: 'Mobile app for coffee enthusiasts.',
      features: [
        'Personalize your coffee order by choosing different sizes, milk options, sugar options and espresso shots.',
        'Secure sign-up and login functionality using Firebase Authentication, allowing users to create accounts, sign in, log out and delete their accounts.'
      ],
      tech: ['Kotlin', 'Android Studio', 'Firebase'],
      liveDemo: '#',
      sourceCode: import.meta.env.VITE_MOBILE_APP_REPO_URL || "#",
      image: 'public/images/coffee_app.png'
    },
    {
      title: 'Calculator',
      description: 'Simple calculator app with basic arithmetic operations.',
      features: [
        'Addition, subtraction, multiplication, and division functionalities',
        'User-friendly interface with clear display'
      ],
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveDemo: '#',
      sourceCode: import.meta.env.VITE_CALENDAR_REPO_URL || "#",
      image: 'public/images/calculator.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-divider"></div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                {project.image && (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-divider"></div>
                <div className="project-buttons">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn live-demo-btn">
                    Live Demo
                  </a>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn source-code-btn">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
