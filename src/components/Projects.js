import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Sales Analytics Dashboard',
      category: 'Data Analysis',
      description: 'Built an interactive dashboard using Tableau and Python to track real-time sales metrics, customer behavior, and revenue trends. Integrated with multiple data sources for comprehensive business insights.',
      technologies: ['Python', 'Tableau', 'SQL', 'PostgreSQL', 'ETL'],
      image: '📊',
    },
    {
      title: 'Scalable ETL Pipeline with Apache Airflow',
      category: 'Data Engineering',
      description: 'Designed and implemented a robust ETL pipeline processing millions of records daily. Used Apache Airflow for workflow orchestration, AWS S3 for storage, and Snowflake for data warehousing.',
      technologies: ['Apache Airflow', 'AWS', 'Snowflake', 'Python', 'Docker'],
      image: '⚙️',
    },
    
    {
      title: 'Customer Churn Prediction Model',
      category: 'Data Analysis',
      description: 'Developed a machine learning model to predict customer churn with 85% accuracy. Used feature engineering, ensemble methods, and created visualizations to explain model predictions to stakeholders.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
      image: '🤖',
    },
    {
      title: 'Real-Time Data Streaming Platform',
      category: 'Data Engineering',
      description: 'Built a real-time data streaming platform using Apache Kafka and Spark Streaming. Processed event data from multiple sources and stored in a time-series database for analytics.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Kubernetes', 'Python', 'Redis'],
      image: '🚀',
    },
    {
      title: 'Data Warehouse Migration Project',
      category: 'Data Engineering',
      description: 'Led migration of on-premise data warehouse to cloud-based solution (AWS Redshift). Reduced query times by 60% and cut infrastructure costs by 40% while improving scalability.',
      technologies: ['AWS Redshift', 'Python', 'ETL', 'SQL', 'Data Modeling'],
      image: '☁️',
    },
    {
      title: 'Market Research Analysis Dashboard',
      category: 'Data Analysis',
      description: 'Created comprehensive market research dashboard using Power BI. Analyzed competitor data, market trends, and customer sentiment to support strategic business decisions.',
      technologies: ['Power BI', 'SQL', 'Excel', 'Python', 'Data Visualization'],
      image: '📈',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my expertise in data analysis and data engineering
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.image}</div>
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

