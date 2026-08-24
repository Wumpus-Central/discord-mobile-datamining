// _runtime/04621_flatRest.js
import shortOut from "04622_shortOut.js";
import overRest from "04626_overRest.js";
import flatten from "04628_flatten.js";


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};