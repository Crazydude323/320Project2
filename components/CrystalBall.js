import React, { useState, useEffect } from "react";

export default function CrystalBall(props) {
  //the crytal ball is just a circle for now, but we'll be adding some sort of flash or smoke animation later to make it look nice.
  //Clicking on the crystal ball will run the generateFortune function that was passed up, and display your fortune. As mentioned, we'll tie an animation to this later.
  return (
    <div
      onClick={() => {
        props.fortuneGen();
        props.cloudPart(-250, 250);
      }}
    >
      {/* Creating the crystal ball & glint */}
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="100" fill="#D4F4F2" />
        <path d="M 10 100 Q 20 20 100 10 Z" fill="white" />
      </svg>
    </div>
  );
}
