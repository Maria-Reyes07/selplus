import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../style/AiNewsAgent.css";
import ChatBot from "../components/ChatBot";

export default function NewsDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const newsData = [
    { headline: "Bike Thefts Rise Near UIC Campus, Police Issue Safety Advisory", relevance: "Impacts John Doe", source: "Chicago Tribune", date: "09/20/25", address: "UIC Campus" },
    { headline: "Chicago Schools Close Due to Floods — Classes May Move Online", relevance: "Impacts Jane Smith", source: "Chicago Tribune", date: "09/21/25", address: "Chicago" },
    { headline: "Heavy Snowstorm Expected in Chicago — Classes May Move Online", relevance: "Impacts Alex Johnson", source: "FOX 32 Chicago", date: "09/22/25", address: "Chicago" },
  ];

  // Filter by mentee name OR address/location
  const filteredNews = newsData.filter(news =>
    news.relevance.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (news.address && news.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="news-dashboard">
        <h2 className="dashboard-title">AI News Agent Dashboard</h2>

        <div className="dashboard-content">
          {/* Local News */}
          <div className="local-news">
            <div className="local-news-header">
              <h3 className="section-title">Local News</h3>
              <input
                type="text"
                placeholder="Search by mentee name or address..."
                className="form-control search-bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <div key={index} className="news-card">
                  <div className="news-details">
                    <p><strong>Headline:</strong> {news.headline}</p>
                    <p><strong>Relevance:</strong> {news.relevance}</p>
                    <p><strong>Source:</strong> {news.source}</p>
                    <p><strong>Date:</strong> {news.date}</p>
                    <p><strong>Address:</strong> {news.address}</p>
                    <div className="news-actions">
                      <button className="btn btn-success btn-sm">View</button>
                      <button className="btn btn-secondary btn-sm">Dismiss</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching news found.</p>
            )}
          </div>

          {/* Chatbot */}
          <div className="chat-section">
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
}






