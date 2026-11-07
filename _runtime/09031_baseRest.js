// _runtime/09031_baseRest.js
import identity from "00549_identity.js";
import shortOut from "05967_shortOut.js";
import overRest from "05971_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
