import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-Body">
      <div className="Design"></div>
      <div className="Design2"></div>
      <h1 className="Heading">
        Cyberthreats: What are they, and how it it affect you
      </h1>

      <p className="Text">
        The whole world is now depending on technology. Everyone is using it due
        to this pandemic. Because of this, your personal data is stored in your
        computers. But this raises a question, how safe our computers are truly
        are? The answer is, they are not. Computers can be hacked, which could
        be used to steal your data. You need to understand, what these types of
        threats are, and how you can be safe from them. You can go through the{" "}
        <Link to="/resources">Resource</Link> and{" "}
        <Link to="/videos">Videos</Link> tab and learn about the types of
        threats and you can attempt the quiz at <Link to="/quiz">Quiz</Link>.
      </p>
    </div>
  );
}

export default Home;
