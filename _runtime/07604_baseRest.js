// _runtime/07604_baseRest.js
import identity from "00549_identity.js";
import shortOut from "06082_shortOut.js";
import overRest from "06086_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
