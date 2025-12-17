import React, { useState } from 'react';
import axios from 'axios'; // Import axios to talk to the backend
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // New state for success/error messages
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Show user something is happening

    // --- UPDATED LOGIC START ---
    // Instead of opening mailto, we send data to your backend
    axios.post('http://localhost:8082/contact', formData)
      .then(res => {
        console.log("Server Response:", res.data);
        setStatus('Message Sent Successfully!');
        
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(err => {
        console.error("Error sending message:", err);
        setStatus('Failed to send message. Is the backend running?');
      });
    // --- UPDATED LOGIC END ---
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>

        <div className="contact-grid">
          
          {/* Left Side: Contact Info Cards */}
          <div className="contact-info">
            
            <div className="info-card">
              <div className="icon-box">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>logeshs4605@gmail.com</p>
                <a href="mailto:logeshs4605@gmail.com" className="link-text">Send a message</a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 75984 10327</p>
                <a href="tel:+917598410327" className="link-text">Call me</a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Salem, Tamil Nadu</p>
                <span className="link-text">India</span>
              </div>
            </div>

          </div>

          {/* Right Side: The Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Logesh"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="logesh@example.com"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>

            {/* Added a small status message below the button to show success/error */}
            {status && (
              <p style={{ marginTop: '15px', color: status.includes('Success') ? '#64ffda' : '#ff6b6b' }}>
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;