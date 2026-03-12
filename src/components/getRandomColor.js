import { choice } from "pretty-random";

/**
 *
 * @returns {string}A random color from a set array of colors
 */
export function getRandomColor() {
  const colorChoices = ["#041421", "#042630", "#4c7273", "#b0bdbb", "#d0d6d6"];
  return choice(colorChoices);
}
