// _runtime/04993_flatRest.js
import shortOut from "04994_shortOut.js";
import overRest from "04998_overRest.js";
import flatten from "05000_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
}
