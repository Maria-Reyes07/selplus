import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% of a section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="home-container">
      {/* Fixed Navbar */}
      <nav className="top-nav">
        <a href="#hero" className={activeSection === "hero" ? "active" : ""}>
          Home
        </a>
        <a href="#mission" className={activeSection === "mission" ? "active" : ""}>
          Mission
        </a>
        <a href="#features" className={activeSection === "features" ? "active" : ""}>
          Features
        </a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero">
        <h1 className="title">SLE Plus</h1>
        <p className="subtitle">
          Empowering mentors with AI insights and data-driven support.
        </p>
        <button className="cta-btn" onClick={() => navigate("/news")}>
          View Dashboard
        </button>
      </header>

      {/* Mission Section */}
      <section id="mission" className="section">
        <h2>Our Mission</h2>
        <p>
          We built SLE Plus during the Gloo Hackathon to help mentors analyze
          student performance, attendance, and behavior — turning data into
          actionable insights.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2>Key Features</h2>
        <ul>
          <li>AI Group Recommendations</li>
          <li>Student Performance Dashboard</li>
          <li>Chatbot Support</li>
          <li>Local News Relevance Alerts</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:team@gloohackathon.com">team@gloohackathon.com</a>
        </p>
      </section>
    </div>
  );
}

