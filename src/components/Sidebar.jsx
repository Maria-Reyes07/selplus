import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import selLogo from "../assets/selgentic-logo.jpg";
import "../style/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-logo">
          <img src={selLogo} alt="SELgentic Logo" className="logo-img" />
        </div>

        <h2>Hello, <br /> Mentor!</h2>
        <nav className="nav">
          <NavLink to="/" className="nav-item">
            <i className="bi bi-house-door"></i> Home
          </NavLink>

          <NavLink to="/news" className="nav-item">
            <i className="bi bi-newspaper"></i> AI News Agent
          </NavLink>

          <NavLink to="/videos" className="nav-item">
            <i className="bi bi-play-circle"></i> Video Rec.
          </NavLink>

          <NavLink to="/groups" className="nav-item">
            <i className="bi bi-people"></i> Group Rec.
          </NavLink>
        </nav>
      </div>
      <div>
        <select className="language-switch">
          <option>English</option>
          <option>Español</option>
        </select>
      </div>
    </div>
  );
}



