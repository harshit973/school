import React from "react";

function Carousel() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <img
        style={{ height: "100%", width: "100%", filter: "brightness(0.8)" }}
        src={"/assets/3N1A0229.JPG"}
      />
      <div className="home-gradient"></div>
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 130,
          textShadow: "0 2px 2px rgba(0,0,0,.25)",
          width: 330,
          color: "white",
          textAlign: "left",
        }}
      >
        <h3 style={{ fontSize: 50 }}>Middle & Upper School Open House</h3>
        <button type="button" className="btn btn-outline-light">Primary</button>        
      </div>
    </div>
  );
}

export default Carousel;
