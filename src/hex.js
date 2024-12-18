/**
 * @functions
 * Returns a hex randomly.
 * @param {string?} prefix - Character to place before hex.
 * @returns Returns a random hex.
 */
function hex(prefix = '') {
  if (typeof prefix !== 'string') throw new Error('prefix must be string.');
  const [r, g, b] = require('./rgb')();
  return prefix + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}

module.exports = hex;
