// _runtime/08071_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05000_shortOut.js";
import overRest from "05004_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
}
