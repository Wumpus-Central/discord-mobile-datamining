// _runtime/08471_baseRest.js
import identity from "00549_identity.js";
import shortOut from "04709_shortOut.js";
import overRest from "04713_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
}
