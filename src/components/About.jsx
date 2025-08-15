import React from 'react';
import { Link } from 'react-scroll';
import '../styles/about.css';



export default function About() {
  const handleResumeView = () => {
    window.open(import.meta.env.VITE_RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-divider"></div>
          
          <div className="about-grid">
            <div className="about-text">
                 <h3> Get to know me</h3>
              <p>
                Hi, I'm <strong>Reabetsoe Kock</strong>, a passionate Software Developer
                with 6 months of hands-on experience in building, maintaining, and
                optimising modern web applications. I enjoy solving problems, learning
                new technologies, and transforming ideas into functional, user-friendly
                solutions through clean and efficient code.
              </p>
              <p>
                During my internship, I worked on both front-end and back-end projects,
                fixing bugs, testing features, and working with databases to ensure
                smooth application performance.   
              </p>
              {/* Download CV Button */}
              <button
                onClick={handleResumeView}
                className="cv-button"
              >
                View Resume
              </button>

            </div>
            
            <div className="about-sidebar">
              <div className="checklist">
                <h4>What I Do</h4>
                <div className="checklist-item">                 
                  <label><span>✓</span> Frontend Development</label>
                </div>
                <div className="checklist-item"> 
                  <label> <span>✓</span> Backend Development</label>
                </div>
                <div className="checklist-item">
                  <label> <span>✓</span> Database Management</label>
                </div>
              </div>
              
              <div className="interests">
                <h4>When I'm Not Coding</h4>
                <div className="interest-tags">
                  <span className="tag">📚 Reading </span>
                  <span className="tag">🏃‍♂️ Fitness</span>
                  <span className="tag">🎵 Music</span>
                  <span className="tag">💻 Learning New Technologies</span>
                </div>
              </div>
            </div>
          </div></div>
        </div>     
    </section>
  );
}