function convRgb(options) {
  if (typeof options !== 'object') throw new Error("options must be object.");
  return require('../rgb')();
}

module.exports = convRgb;
