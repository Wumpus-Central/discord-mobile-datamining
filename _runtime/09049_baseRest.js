// _runtime/09049_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05994_shortOut.js";
import overRest from "05998_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
