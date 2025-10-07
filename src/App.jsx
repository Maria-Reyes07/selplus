import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NewsDashboard from "./pages/NewsDashboard";
import VideoDashboard from "./pages/VideoDashboard";
import GroupDashboard from "./pages/GroupDashboard";
import Home from "./pages/Homepage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsDashboard />} />
        <Route path="/videos" element={<VideoDashboard />} />
        <Route path="/groups" element={<GroupDashboard />} />
      </Routes>
    </Router>
  );
}


