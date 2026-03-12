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
    backgroundEl.style.backgroundColor = getRandomColor([
      "#bbb791",
      "#a8a583",
      "#969274",
      "#8c896d",
      "#706e57",
    ]);
    cardEl.style.backgroundColor = getRandomColor([
      "#d6b588",
      "#c1a37a",
      "#ab916d",
      "#a18866",
    ]);
  }, 3100);
};
