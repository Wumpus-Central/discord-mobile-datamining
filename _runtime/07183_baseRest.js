// _runtime/07183_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05638_shortOut.js";
import overRest from "05642_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
