import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-gray-300 rounded"></div>
          <span className="logo">SLE Plus</span>
        </div>
        <h2>Hello, <br /> Mentor!</h2>
        <nav className="nav">
          <a href="/news" className="nav-item">AI News Agent</a>
          <a href="/videos" className="nav-item">Video Rec.</a>
          <a href="/groups" className="nav-item">Group Rec.</a>
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



