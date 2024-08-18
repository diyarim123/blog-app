import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewBlog from "./CreateBlog";
import NotFound from "./NotFound";
import BlogDetail from "./BlogDetail"

function App() {
  return (
    <Router>
      <div id="big-container">
        <Navbar />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<NewBlog />} />
          <Route exact path="/blogs/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
