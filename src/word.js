const colorName = require('color-name-lib');

function word(language = 'en') {
  const langList = ['en', 'ja', 'cn'];
  if (!langList.includes(language)) throw new Error("invalid language.");
  const color = require('./hex')();
  return colorName(color, language);
}

module.exports = word;
