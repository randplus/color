const colorName = require('color-name-lib');

/**
 * @functions
 * Returns a color name randomly.
 * @param {'en' | 'ja' | 'cn' | null} prefix - Random color language.
 * @returns Returns a random color name.
 */
function word(language = 'en') {
  const langList = ['en', 'ja', 'cn'];
  if (!langList.includes(language)) throw new Error("invalid language.");
  const color = require('./hex')();
  return colorName(color, language);
}

module.exports = word;
