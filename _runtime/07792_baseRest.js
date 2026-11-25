// _runtime/07792_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05886_shortOut.js";
import overRest from "05890_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
