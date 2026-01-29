import React from 'react';
import './Skills.css';

const Skills = () => {
  const dataAnalystSkills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 95 },
    { name: 'Tableau', level: 85 },
    { name: 'Power BI', level: 88 },
    { name: 'Excel', level: 92 },
    { name: 'R', level: 80 },
    { name: 'Statistics', level: 90 },
    { name: 'Machine Learning', level: 85 },
  ];

  const dataEngineerSkills = [
    { name: 'Apache Spark', level: 88 },
    { name: 'Apache Airflow', level: 85 },
    { name: 'AWS', level: 90 },
    { name: 'Docker', level: 85 },
    { name: 'Kafka', level: 80 },
    { name: 'Snowflake', level: 88 },
    { name: 'PostgreSQL', level: 92 },
    { name: 'ETL/ELT', level: 90 },
  ];

  const otherSkills = [
    'Git', 'Linux', 'CI/CD', 'Kubernetes', 'MongoDB', 'Redis',
    'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Jupyter',
    'Data Modeling', 'Data Warehousing', 'API Development'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Data Analyst</h3>
            <div className="skills-grid">
              {dataAnalystSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Data Engineer</h3>
            <div className="skills-grid">
              {dataEngineerSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Additional Tools & Technologies</h3>
            <div className="skills-tags">
              {otherSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

