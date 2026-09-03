// _runtime/08675_baseRest.js
import identity from "00631_identity.js";
import shortOut from "04627_shortOut.js";
import overRest from "04631_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
