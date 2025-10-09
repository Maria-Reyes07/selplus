import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBot from "../components/ChatBot";
import "../style/VideoRec.css";

export default function VideoDashboard() {
  const tags = [
    "All",
    "Middle School",
    "Team Building",
    "Elementary School",
    "Mindfulness",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const videos = [
    { id: 1, title: "Wk of 7/15/20 - SEL Reflections (All Grades)", rationale: "Highly Recommended", duration: "2:42", videoId: "Lrn_zvyrtxY", category: "Middle School" },
    { id: 2, title: "Fridays - Team Building & Reflections (All Grades)", rationale: "Great for group exercises", duration: "1:45", videoId: "00Xn6JNzLCs", category: "Team Building" },
    { id: 3, title: "Mindfulness - Breathing With Noise", rationale: "Helps with relaxation", duration: "3:38", videoId: "jtN7Pm2UbwA", category: "Mindfulness" },
    { id: 4, title: "Mindfulness - Stretching", rationale: "Improves focus & calm", duration: "2:42", videoId: "H4ObBZmYEMg", category: "Mindfulness" },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || video.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="video-app-layout">
      <Sidebar />

      <div className="video-page-content">
        {/* === Header Section === */}
        <div className="video-header">
          <h2 className="video-dashboard-title">Video Rec. Dashboard</h2>

          <div className="video-controls">
            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <i className="bi bi-search"></i>
              </button>
            </div>

            {/* Filter Tags */}
            <div className="filter-buttons">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={selectedTag === tag ? "active-tag" : ""}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* === Video Grid Section === */}
        <div className="video-dashboard">
          <div className="video-grid">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <div key={video.id} className="video-card">
                  <div className="thumbnail-container">
                    <iframe
                      width="100%"
                      height="160"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="video-info">
                    <h5>{video.title}</h5>
                    <p>Rationale: {video.rationale}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos found</p>
            )}
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}





