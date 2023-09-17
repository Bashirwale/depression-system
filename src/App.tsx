import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "./Component/Redux/store";
import DepressionQuiz from "./Pages/DepressionQuiz";

function App() {
  const currentUser = useSelector(
    (state: RootState) => state.question.userName
  );
  return (
    <div className="h-screen">
      <Router>
        <nav className="flex items-center justify-between bg-primaryColor p-3 md:p-4 lg:p-5 w-full">
          <NavLink to="/">
            <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl capitalize font-semibold">
              depression test
            </h1>
          </NavLink>
          <div className="flex items-center gap-4">
            <p className="text-base md:text-lg lg:text-xl text-white capitalize font-semibold">
              {currentUser}
            </p>
            <RxAvatar className="text-2xl text-white font-semibold" />
          </div>
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
