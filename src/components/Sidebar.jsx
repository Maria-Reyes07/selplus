import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-gray-300 rounded"></div>
          <span className="logo">SEL Plus</span>
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
          <option>Spanish</option>
        </select>
      </div>
    </div>
  );
}



