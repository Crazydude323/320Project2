import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Cloud(props) {
  return (
    <div>
      <div
        id="cloud-circle"
        style={{ boxShadow: `${400}px 400px 60px 0px #fff` }}
      ></div>
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
    </div>
  );
}

//style={{box-shadow: 400px 450px 60px 0px #fff}}
