import React, { useState, useEffect } from "react";
import CrystalBall from "./CrystalBall";

export default function Fortune(props) {
  //states to hold current fortune pieces, and the fortune JSON data
  const [fortunes, setFortunes] = useState([]);
  const [fortBeg, setFortBeg] = useState("");
  const [fortMid, setFortMid] = useState("");
  const [fortEnd, setFortEnd] = useState("");

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
      <CrystalBall fortuneGen={fortuneGenerate} />
      <div id="message">
        <p>
          {fortBeg + " "}
          {fortMid + " "}
          {fortEnd}
        </p>
      </div>
    </div>
  );

  //adds the text for the fortunes to the screen.
  //Right now it will always fetch element 0 of the text array, but in future it will use Math.random() to randomize the text displayed.
  function fortuneGenerate() {
    setFortBeg(fortunes[0].text[getRandomInt(3)]);
    setFortMid(fortunes[1].text[getRandomInt(3)]);
    setFortEnd(fortunes[2].text[getRandomInt(3)]);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
