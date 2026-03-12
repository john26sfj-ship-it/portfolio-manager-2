import { getRandomColor } from "./components/getRandomColor";

const backgroundEl = document.getElementById("root");
const cardEl = document.getElementById("card");

/* Makes sure the page is loaded,
  then sets background-color
  to a random one through getRandomColor.
  Uses the pretty-random npm.
*/
window.onload = function () {
  setInterval(() => {
    let backColor = getRandomColor();
    let tryCardColor = getRandomColor();
    backgroundEl.style.backgroundColor = backColor;

    if (tryCardColor == backColor) {
      tryCardColor = getRandomColor();
    } else {
      cardEl.style.backgroundColor = tryCardColor;
    }
  }, 4100);
};
