// _runtime/04626_flatRest.js
import shortOut from "04627_shortOut.js";
import overRest from "04631_overRest.js";
import flatten from "04633_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
