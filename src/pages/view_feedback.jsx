import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/view_feedback.css";

function ViewFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const storedFeedback =
      JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  return (
    <div className="view-page">
      <header className="site-header">
        <div className="header-left">
          <div className="title-row">
            <h1>Community Voice</h1>
            <Link to="/feedback" className="nav-link">
              Submit New Feedback
            </Link>
          </div>
          <p>See all feedback submitted by our community members.</p>
        </div>
      </header>


      <div className="container">
        {feedbackList.length === 0 ? (
          <div className="no-feedback">No feedback submitted yet.</div>
        ) : (
          feedbackList.map((fb, index) => (
            <div className="feedback-card" key={index}>
              <h3>
                {fb.firstName} {fb.lastName} - {fb.eventName}
              </h3>
              <p>
                <strong>Email:</strong> {fb.email}
              </p>
              <p>
                <strong>Phone:</strong> {fb.phone}
              </p>
              <p>
                <strong>Event Date:</strong> {fb.eventDate}
              </p>
              <p className="rating">
                <strong>Rating:</strong> {fb.rating} / 5
              </p>
              <p>
                <strong>Feedback:</strong> {fb.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewFeedback;
