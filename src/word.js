const fs = require('fs-extra');
const path = require('path');

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function colorDistance(color1, color2) {
  return Math.sqrt(
    Math.pow(color1.r - color2.r, 2) +
    Math.pow(color1.g - color2.g, 2) +
    Math.pow(color1.b - color2.b, 2)
  );
}

function getClosestColor(hex, language) {
  const filePath = path.join(__dirname, `../data/${language}.json`);
  const colors = fs.readJsonSync(filePath);
  const targetColor = hexToRgb(hex);
  let closestColor = null;
  let minDistance = Infinity;

  for (const [colorHex, colorName] of Object.entries(colors)) {
    const currentColor = hexToRgb(colorHex);
    const distance = colorDistance(targetColor, currentColor);

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = colorName;
    }
  }

  return closestColor;
}

function word(language = 'en') {
  const langList = ['en', 'ja', 'cn'];
  if (!langList.includes(language)) throw new Error("invalid language.");
  const color = require('./hex')('#');
  return getClosestColor(color, language);
}

module.exports = word;
