import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Drop a message below!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" className="send-button">Send</button>
      </form>

 
      <div className="contact-icons">
        <div className="icon-card">
          <a href="mailto:atanna031@gmail.com">
            📧 Email
          </a>
        </div>
        <div className="icon-card">
          <a href="https://linkedin.com/in/anutanna" target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
