import React, { useState, useEffect, useRef } from "react";
import "../styles.css";

export default function Cloud(props) {
  return (
    <div>
      {/* This is for styling the clouds */}
      <div
        className="cloud-circle"
        style={{ boxShadow: `${props.cloudX}vw 450px 60px 0px #fff` }}
        ref={props.cloudRef}
      ></div>
      {/* This is for creating the clouds  */}
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          {/* {This filter the frequency graphic for SVG} */}
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
    </div>
  );
}

//style={{box-shadow: 400px 450px 60px 0px #fff}}
