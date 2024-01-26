import React from "react";
import Navbar from "../Components/Navbar.tsx";
import Carousel from "../Components/Carousel.tsx";

function Home() {
  const getHeader = () => {
    return (
      <>
        <Navbar
          style={{
            zIndex: 333,
            position: "absolute",
            left: 0,
            right: 0,
            background: "transparent",
          }}
          className={"navbar navbar-expand-lg"}
        />
        <Carousel />
      </>
    );
  };
  return <div>{getHeader()}</div>;
}

export default Home;
