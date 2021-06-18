import React, { useState } from "react";

import "./styles.css";

var hello = "Search or Click on the emojis to know what they mean";

var crystalBall = "🔮Zodiac Sign";
const emojiPedia = {
  "♈": " Aries",
  "♉": " Tauras",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♑": "Capricorn",

  "♓": "Pisces",
  "♐": "Sagittarius",
  "♋": "Cancer",
  "♒": "Aquarius",
  "♊": "Gemini",
  "♏": "Scorpio"
};

var emojisKnown = Object.keys(emojiPedia);
//console.log(emojisKnown);
//var abc=0;
// function clickHandler()
// {
//   abc=abc+1
//   console.log("hey I got clicked",abc);
// }
export default function App() {
  const [newInputEmoji, setNewInputEmoji] = useState("");

  function guessEmojimeaning(event) {
    var inputEmoji = event.target.value;

    var newInputEmoji = emojiPedia[inputEmoji];

    setNewInputEmoji(newInputEmoji);
  }

  // console.log(newInputEmoji);
  function clickHandler(emoji) {
    //var inputEmoji = event.target.value;

    var newInputEmoji = emojiPedia[emoji];

    setNewInputEmoji(newInputEmoji);
    //console.log(setNewInputEmoji);
  }
  return (
    <div className="fullPage">
      <div className="App">
        <h1>{crystalBall}</h1>
        <h2>{hello}</h2>
        <input onChange={guessEmojimeaning}></input>
        <div style={{ fontSize: "2rem" }}>{newInputEmoji}</div>

        <h2>
          {emojisKnown.map(function (emoji) {
            return (
              <span
                key={emoji}
                onClick={() => clickHandler(emoji)}
                style={{
                  textAlign: "center",
                  padding: "2rem",

                  fontSize: "2rem",
                  cursor: "pointer"
                }}
              >
                {emoji}
              </span>
            );
          })}
        </h2>
      </div>
    </div>
  );
}
