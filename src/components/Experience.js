import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: [
        'Lead development of scalable data pipelines processing 10M+ records daily',
        'Architected cloud-based data warehouse migration reducing costs by 40%',
        'Implemented real-time streaming solutions using Apache Kafka and Spark',
        'Mentored junior engineers and established best practices for data engineering'
      ],
      type: 'Data Engineering'
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Corp',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: [
        'Created interactive dashboards and reports driving strategic business decisions',
        'Developed predictive models for customer behavior analysis',
        'Collaborated with cross-functional teams to identify data-driven opportunities',
        'Automated reporting processes saving 15+ hours per week'
      ],
      type: 'Data Analysis'
    },
    {
      title: 'Junior Data Analyst',
      company: 'Data Insights Ltd',
      period: '2019 - 2020',
      location: 'San Francisco, CA',
      description: [
        'Performed data cleaning and validation for large datasets',
        'Created visualizations and reports using Tableau and Power BI',
        'Assisted in building ETL pipelines for data integration',
        'Conducted statistical analysis to support business initiatives'
      ],
      type: 'Data Analysis'
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <div className="experience-type">{exp.type}</div>
                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

