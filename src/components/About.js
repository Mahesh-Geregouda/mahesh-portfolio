import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate data professional with expertise in both data analysis and data engineering. 
              I love turning complex datasets into meaningful insights and building scalable data infrastructure 
              that enables data-driven decision making.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Data Analysis</h3>
                <p>
                  Specialized in extracting actionable insights from complex datasets using statistical analysis, 
                  data visualization, and machine learning techniques. Experienced in creating dashboards and 
                  reports that drive business strategy.
                </p>
              </div>
              <div className="detail-item">
                <h3>Data Engineering</h3>
                <p>
                  Skilled in designing and implementing robust ETL pipelines, data warehouses, and real-time 
                  data processing systems. Proficient in cloud platforms and big data technologies for scalable 
                  data solutions.
                </p>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Data Pipelines Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




