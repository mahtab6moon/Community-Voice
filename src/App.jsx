import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/feedback";
import ViewFeedback from "./pages/view_feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/view" element={<ViewFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
