import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="BottomBar">
      <Link to="/">
        <div className="Button">
          <p className="Text">Home</p>
        </div>
      </Link>
      <Link to="/resources">
        <div className="Button">
          <p className="Text">Resources</p>
        </div>
      </Link>
      <Link to="/videos">
        <div className="Button">
          <p className="Text">Videos</p>
        </div>
      </Link>
      <Link to="/quiz">
        <div className="Button">
          <p className="Text">Quiz</p>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
