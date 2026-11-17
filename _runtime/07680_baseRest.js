// _runtime/07680_baseRest.js
import identity from "00549_identity.js";
import shortOut from "06142_shortOut.js";
import overRest from "06146_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
