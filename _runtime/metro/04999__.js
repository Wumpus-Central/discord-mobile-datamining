// _runtime/metro/04999__.js
import shortOut from "../05000_shortOut.js";
import overRest from "../05004_overRest.js";
import flatten from "../05006_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
