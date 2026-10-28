// _runtime/08907_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05824_shortOut.js";
import overRest from "05828_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
