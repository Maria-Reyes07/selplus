import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import glooLogo from "../assets/gloo-logo.png"; 
import selLogo from "../assets/selgentic-logo.jpg"; 

export default function Home() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const teamMembers = [
    { name: "Robb Myer", title: "" },
    { name: "Maria Reyes", title: "Frontend Developer" },
    { name: "Nathan Daniel", title: "" },
    { name: "Damien Howard", title: "" },
    { name: "Joel Wetzstein", title: "" },
    { name: "Gaelle Feghali", title: "" },
    { name: "Jordan Lee", title: "" },
    { name: "Giru Pandey", title: "" },
    { name: "Andy Smits", title: "" },
    { name: "Laine Klopfenstein", title: "Chief Chaos Orchestrator" },
  ];

  return (
    <div className="home-container">
      {/* Top Navbar */}
      <nav className="top-nav">
        <a href="#hero" className={activeSection === "hero" ? "active" : ""}>Home</a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
        <a href="#features" className={activeSection === "features" ? "active" : ""}>Features</a>
        <a href="#team" className={activeSection === "team" ? "active" : ""}>Team</a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero">
        <img src={selLogo} alt="SELgentic Logo" className="sel-logo" />
        <h1 className="title">SELgentic</h1>
        <p className="subtitle">
          Turning scattered school and community data into clear insight — so mentors can connect faster and care deeper.
        </p>
        <button className="cta-btn" onClick={() => navigate("/news")}>
          View News Agent
        </button>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We’re a hackathon team of builders, mentors, and dreamers using AI to help people flourish. 
          Our project, <strong>SELgentic</strong>, transforms scattered school and community data into clear insight 
          through <strong>news</strong>, <strong>group design</strong>, and <strong>training tools</strong> that help mentors connect faster and care deeper.
        </p>
        <p className="powered">
          Made for humans. Powered by <span className="gloo-text">Gloo AI</span>.
        </p>
        <img src={glooLogo} alt="Gloo AI Logo" className="gloo-logo" />
      </section>

      {/* Features Section */}
    <section id="features" className="section features-section">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card" onClick={() => navigate("/news")}>
          <i className="bi bi-newspaper feature-icon"></i>
          <h3>News Agent</h3>
          <p>
            Delivers hyper-local updates that help mentors understand what’s happening
            around each student’s school and neighborhood.
          </p>
        </div>

        <div className="feature-card" onClick={() => navigate("/groups")}>
          <i className="bi bi-people-fill feature-icon"></i>
          <h3>Group Curriculum Designer</h3>
          <p>
            Builds ready-to-use SEL group activities based on students’ shared
            interests and goals.
          </p>
        </div>

        <div className="feature-card" onClick={() => navigate("/training")}>
          <i className="bi bi-play-circle feature-icon"></i>
          <h3>Training Recommender</h3>
          <p>
            Suggests short, targeted videos to strengthen mentor skills in real time.
          </p>
        </div>
      </div>
    </section>


      {/* Team Section */}
      <section id="team" className="section team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-avatar">
                <span>{member.name.split(" ").map(w => w[0]).join("")}</span>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                {member.title && <p className="title">{member.title}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:support@sel-plus.com" className="contact-link">
            support@sel-plus.com
          </a>
        </p>
      </section>
    </div>
  );
}
