// _runtime/08873_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05788_shortOut.js";
import overRest from "05792_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
