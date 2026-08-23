"use client"

import { useState } from "react"
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa"
import "./Chatbot.css"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { id: Date.now(), role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Call your backend API or use a simple mock response
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      const data = await response.json()

      const botMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.message ||
          "I can help you with your learning journey! Ask me about courses, study tips, or programming concepts.",
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      // Fallback response if API fails
      const fallbackMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "I can help you with your learning! Try asking me about study tips, course recommendations, or programming concepts.",
      }
      setMessages((prev) => [...prev, fallbackMessage])
    }

    setIsLoading(false)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
        title="Open Learning Assistant"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <FaRobot className="bot-icon" />
              <span>Learning Assistant</span>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="welcome-message">
                <FaRobot className="welcome-icon" />
                <p>Hi! I'm your learning assistant. I can help you with:</p>
                <ul>
                  <li>Course recommendations</li>
                  <li>Study tips</li>
                  <li>Programming help</li>
                  <li>Time management</li>
                </ul>
                <p>How can I help you today?</p>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`message ${message.role === "user" ? "user-message" : "bot-message"}`}>
                <div className="message-icon">{message.role === "user" ? <FaUser /> : <FaRobot />}</div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message bot-message">
                <div className="message-icon">
                  <FaRobot />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form className="chatbot-input-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about learning..."
              className="chat-input"
              disabled={isLoading}
            />
            <button type="submit" className="send-btn" disabled={isLoading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot
