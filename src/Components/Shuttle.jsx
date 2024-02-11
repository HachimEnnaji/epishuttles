import React, { useEffect, useState } from "react";
import ShuttleImg from "../shuttle.png";

function Shuttle() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y - 20,
          }));
          break;
        case "ArrowDown":
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + 20,
          }));
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
  }, []);
  return (
    <>
      <img
        src={ShuttleImg}
        alt="Shuttle"
        className="Shuttle"
        height={80}
        width={80}
        style={{ position: "absolute", left: position.x, top: position.y }}
      />
    </>
  );
}

export default Shuttle;
