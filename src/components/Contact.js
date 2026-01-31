import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <a href="mailto:mahesh.shivakumar06@gmail.com">mahesh.shivakumar06@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/mahesh-g-6bb701203/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/mahesh-g-6bb701203
                </a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">💻</div>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/Mahesh-Geregouda" target="_blank" rel="noopener noreferrer">
                  github.com/Mahesh-Geregouda
                </a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Bangalore, Karnataka</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



