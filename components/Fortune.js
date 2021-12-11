import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import CrystalBall from "./CrystalBall";
import Cloud from "./Cloud";

export default function Fortune(props) {
  //states to hold current fortune pieces, and the fortune JSON data
  const [fortunes, setFortunes] = useState([]);
  const [fortBeg, setFortBeg] = useState("");
  const [fortMid, setFortMid] = useState("");
  const [fortEnd, setFortEnd] = useState("");
  //States to hold the clouds apart
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  //fetches JSON data
  useEffect(() => {
    fetch("data/fortuneText.json")
      .then((result) => result.json())
      .then((data) => {
        setFortunes(data);
      });
  }, []);

  //returns the three text pieces, initially displaying nothing, and the crystal ball image. Passes the fortuneGenerate up to the ball object
  return (
    <div>
      <CrystalBall
        fortuneGen={fortuneGenerate}
        cloudPart={cloudAnimationPart}
      />
      <div id="message">
        {/* fetch JSON text message in one from three parts */}
        <p>
          {fortBeg + " "}
          {fortMid + " "}
          {fortEnd}
        </p>
      </div>
      <Cloud cloudX="45" cloudRef={leftRef} />
      <Cloud cloudX="70" cloudRef={rightRef} />
    </div>
  );

  //adds the text for the fortunes to the screen.
  //Right now it will always fetch element 0 of the text array, but in future it will use Math.random() to randomize the text displayed.
  function fortuneGenerate() {
    setFortBeg(fortunes[0].text[getRandomInt(7)]);
    setFortMid(fortunes[1].text[getRandomInt(7)]);
    setFortEnd(fortunes[2].text[getRandomInt(7)]);
  }
  //Retrieves random messages
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //this animation pull the clouds apart to show the text message
  function cloudAnimationPart(cloudLX, cloudRX) {
    gsap.to(leftRef.current, { x: cloudLX });
    gsap.to(rightRef.current, { x: cloudRX });
  }
}
