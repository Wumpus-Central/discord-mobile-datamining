// _runtime/metro/04858__.js
import shortOut from "../04859_shortOut.js";
import overRest from "../04863_overRest.js";
import flatten from "../04865_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
