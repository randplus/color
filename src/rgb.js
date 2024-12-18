/**
 * @functions
 * Returns a rgb randomly.
 * @returns Returns a random rgb.
 */
function rgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return [r, g, b];
}

module.exports = rgb;
