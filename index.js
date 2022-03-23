import React from "react";
import ReactDOM from "react-dom";

function displayMeme(e) {
  e.target.setAttribute("src", "https://reactjs.org/logo-og.png");
  e.target.setAttribute("alt", "meme");
}
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? "kitty" : "doggy";
}

const pics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
};
let img;

// if/else statement begins here:
if (coinToss() === "kitty") {
  img = <img src={pics.kitty} alt="kitty" width="200" height="200" />;
} else {
  img = (
    <img
      src={pics.doggy}
      alt="doggy"
      width="200"
      height="200"
      onClick={displayMeme}
    />
  );
}

ReactDOM.render(img, document.getElementById("root"));
