import React from 'react';
import '../styles/education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
       <div className="education-divider"></div>

      <div className="education-container">
        {/* Illustration */}
        <div className="education-image">
        </div>

        {/* Timeline */}
        <div className="education-timeline">
          {/* Timeline items */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">Software Developer Intern</h4>
                <span className="timeline-date">Mar 2025 –  Aug 2025</span>
                <p>
                 Completed a 6-month internship at Digital Solution Foundry, where I gained hands-on experience in software development,
                 working on both front-end and back-end projects, fixing bugs, testing features, and collaborating with team members.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"> </div>
              <div className="timeline-content">
                <h4 className="timeline-title">Bachelor Of Science in Information Technology (Software Enhgineering)</h4>
                <span className="timeline-date">2022 - 2024</span>
                <p>
                  I completed my BSc in Information Technology with a focus on Software Engineering, where I gained a solid understanding 
                  of software development principles, programming languages, and project management.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">NSC, Bergsig Akademie/Academy</h4>
                <span className="timeline-date">2017 – 2021</span>
                <p>
                  I completed my National Senior Certificate (NSC) at Bergsig Akademie, where I developed a strong foundation in various subjects,
                  including Mathematics, Science, and Computer Studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
