// _runtime/08450_baseRest.js
import identity from "00549_identity.js";
import shortOut from "04708_shortOut.js";
import overRest from "04712_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
