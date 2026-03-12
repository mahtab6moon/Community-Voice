import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Community Voice</h1>
      <p className="home-subtitle">
        Welcome! Choose an option below to submit or view feedback.
      </p>

      <div className="button-container">
        <button className="btn" onClick={() => navigate("/feedback")}>
          Submit Feedback
        </button>

        <button className="btn" onClick={() => navigate("/view")}>
          View Feedback
        </button>
      </div>
    </div>
  );
}

export default Home;