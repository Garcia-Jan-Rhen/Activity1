import '../App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact text-center">
      <h2>Get in Touch</h2>
      <div className="contact-icons">
        <a href="mailto:you@example.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </section>
  );
}