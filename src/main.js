import { getRandomColor } from "./components/getRandomColor";

const backgroundEl = document.getElementById("root");

/* Makes sure the page is loaded,
  then sets background-color
  to a random one through getRandomColor.
  Uses the pretty-random npm.
*/
window.onload = function () {
  setInterval(() => {
    backgroundEl.style.backgroundColor = getRandomColor();
  }, 4100);
};
