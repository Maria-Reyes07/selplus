import React, { useState } from "react";
import "../style/ChatBot.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    setMessages([...messages, { sender: "user", text }]);
  };

  return (
    <div className="chatbot">
      {/* Header */}
      <div className="chatbot-header">
        <i className="bi bi-robot chatbot-icon"></i>
        <h3 className="chatbot-title">Chatbot</h3>
        <p className="chatbot-subtitle">AI Agent</p>
      </div>

      {/* Messages */}
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${
              msg.sender === "user" ? "user-msg" : "bot-msg"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src="/bot-avatar.png"
                alt="Bot"
                className="chat-avatar"
              />
            )}

            <div className="chat-bubble">{msg.text}</div>

            {msg.sender === "user" && (
              <img
                src="/user-avatar.png"
                alt="User"
                className="chat-avatar"
              />
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Write your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              handleSend(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          onClick={() => {
            const input = document.querySelector(".chatbot-input input");
            if (input.value) {
              handleSend(input.value);
              input.value = "";
            }
          }}
        >
          <i className="bi bi-send"></i>
        </button>
      </div>
    </div>
  );
}





