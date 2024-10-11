function convWord(options = {}) {
  if (typeof options !== 'object') throw new Error("options must be object.");
  return require('../word')(options.language);
}

module.exports = convWord;
