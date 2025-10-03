import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../components/Sidebar";
import "../style/GroupRec.css";

export default function GroupDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="dashboard-main">
        <h2 className="dashboard-title">Group Intervention Dashboard</h2>
        <p className="dashboard-subtitle">Mentor overview of student caseload</p>

        {/* Quick Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <h3>Total Students</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Average GPA</h3>
            <p>68.2</p>
          </div>
          <div className="stat-card warning">
            <h3>Most Common Tier Issue</h3>
            <p>Behavior Tier 3</p>
          </div>
          <div className="stat-card info">
            <h3>Attendance Trend</h3>
            <p>Mixed</p>
          </div>
        </section>

        {/* AI Recommendation */}
        <section className="recommendation-box">
          <h3>AI Recommendation</h3>
          <p>
            Based on your caseload, I recommend a <strong>Study Skills Group Workshop</strong>.
            Activities may include peer tutoring, schedule planning, and small group exercises.
          </p>
        </section>

        {/* Mentor Feedback */}
        <section className="feedback-box">
          <h3>Mentor Feedback</h3>
          <div className="feedback-buttons">
            <button className="btn-success bi bi-hand-thumbs-up-fill"> Helpful</button>
            <button className="btn-danger bi bi-hand-thumbs-down-fill"> Not Helpful</button>
          </div>
          <textarea placeholder="Add notes..."></textarea>
        </section>
      </main>
    </div>
  );
}



