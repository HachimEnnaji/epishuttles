import React from "react";
import meteor from "../meteor.png";
import fire from "../fire.gif";

function Meteor({ position }) {
  return (
    <div id="Meteor-animation" style={{ position: "absolute", top: `${position}%` }}>
      <img src={fire} className="fire" alt="fire" />
      <div className=" on-fire">
        <img src={meteor} alt="meteor" width={70} height={70} />
      </div>
    </div>
  );
}

export default Meteor;
