// _runtime/08534_baseRest.js
import identity from "00549_identity.js";
import shortOut from "04743_shortOut.js";
import overRest from "04747_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
