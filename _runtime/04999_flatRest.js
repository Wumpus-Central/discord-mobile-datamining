// _runtime/04999_flatRest.js
import shortOut from "05000_shortOut.js";
import overRest from "05004_overRest.js";
import flatten from "05006_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
}
