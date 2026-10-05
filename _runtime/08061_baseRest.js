// _runtime/08061_baseRest.js
import identity from "00549_identity.js";
import shortOut from "04994_shortOut.js";
import overRest from "04998_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
}
