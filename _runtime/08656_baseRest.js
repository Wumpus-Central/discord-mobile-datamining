// _runtime/08656_baseRest.js
import identity from "00549_identity.js";
import shortOut from "04859_shortOut.js";
import overRest from "04863_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
