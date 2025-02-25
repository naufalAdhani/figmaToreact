import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Messages from "./components/Messages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
};

export default App;