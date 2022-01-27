import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./index.css";

import Home from "./Components/Home";
import Resources from './Components/Resources';
import Navbar from './Components/BottomBar';
import Videos from './Components/Videos';
import Quiz from './Components/Quiz';


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
      <Navbar/>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
