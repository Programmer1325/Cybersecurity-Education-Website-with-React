import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="BottomBar">
      <Link to="/">
        <div className="Button">
          <p className="Text Bar">Home</p>
        </div>
      </Link>
      <Link to="/resources">
        <div className="Button">
          <p className="Text Bar">Resources</p>
        </div>
      </Link>
      <Link to="/videos">
        <div className="Button">
          <p className="Text Bar">Videos</p>
        </div>
      </Link>
      <Link to="/quiz">
        <div className="Button">
          <p className="Text Bar">Quiz</p>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
