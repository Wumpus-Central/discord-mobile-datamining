// _runtime/04427_flatRest.js

export default function flatRest(arg0) {
  const tmp = require("04428_shortOut.js") /* shortOut */;
  return tmp(require("04432_overRest.js") /* overRest */(arg0, undefined, require("04434_flatten.js") /* flatten */), "" + arg0);
};