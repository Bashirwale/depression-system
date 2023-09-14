import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import Home from "./Pages/Home";
import DepressionQuiz from "./Pages/DepressionQuiz";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <nav className="flex items-center justify-between bg-primaryColor p-3 md:p-4 lg:p-5 w-full">
          <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl capitalize font-normal">
            depression test
          </h1>
          <RxAvatar className="text-2xl text-white" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<DepressionQuiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
