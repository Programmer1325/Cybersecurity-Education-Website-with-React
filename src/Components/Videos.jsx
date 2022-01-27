import React from "react";

function Videos() {
  return (
    <div className="Video-Body">
      <div className="Design"></div>
      <div className="Design2"></div>
      <h1 className="Heading">See this video to learn more on Cybersecurity</h1>
      <p className="Text">
        Pay attention because there will be a quiz later on
      </p>
      <video width="850" height="500" controls className="Video">
        <source src="/Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Videos;
