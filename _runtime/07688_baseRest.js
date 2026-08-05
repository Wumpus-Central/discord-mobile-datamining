// _runtime/07688_baseRest.js

export default function baseRest(arg0, arg1) {
  const tmp = require("04428_shortOut.js") /* shortOut */;
  return tmp(require("04432_overRest.js") /* overRest */(arg0, arg1, require("00634_identity.js") /* identity */), "" + arg0);
};