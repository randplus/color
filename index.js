/**
 * @function 
 * Returns a color randomly.
 * @param {'hex' | 'rgb' | 'word' | null} format - Choose a random color format. 
 * @param {{ language?: 'en' | 'ja' 'cn'; prefix?: string } | null} options - Options.
 * @returns {string | [number, number, number]} Returns a random color.
 */
function color(format = 'hex', options = {}) {
  const type = ['hex', 'rgb', 'word'];
  if (!type.includes(format)) throw new Error("invalid format.");
  const content = `\`color()\` is deprecated. Please use \`color.${format}()\` instead.`;
  process.emitWarning(
    content,
    {
      code: 'DeprecationWarning',
      detail: 'This function may be deleted in the future.',
    }
  );
  if (typeof options !== 'object') throw new Error("options must be object.");
  return require(`./src/conv/c${format}`)(options);
}

module.exports = color;
module.exports.hex = require('./src/hex');
module.exports.rgb = require('./src/rgb');
module.exports.word = require('./src/word');
