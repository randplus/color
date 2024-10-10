function convHex(options) {
  if (typeof options !== 'object') throw new Error("options must be object.");
  return require('../hex')(options.prefix);
}

module.exports = convHex;
