import { choice } from "pretty-random";

/**
 *
 * @returns {string}A random color from a set array of colors
 */
export function getRandomColor(colors) {
  return choice(colors);
}
