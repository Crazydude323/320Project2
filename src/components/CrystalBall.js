import React, { useState, useEffect } from "react";

export default function CrystalBall(props) {
  //the crytal ball is just a circle for now, but we'll be adding some sort of flash or smoke animation later to make it look nice.
  //Clicking on the crystal ball will run the generateFortune function that was passed up, and display your fortune. As mentioned, we'll tie an animation to this later.
  return (
    <div
      onClick={() => {
        props.fortuneGen();
        // props.cloudPart("CloudRight");
        props.cloudPart(-250, 250);
      }}
    >
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="100" fill="#D4F4F2" />
      </svg>
    </div>
  );
}
