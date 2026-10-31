// _runtime/metro/05837__.js
import shortOut from "../05838_shortOut.js";
import overRest from "../05842_overRest.js";
import flatten from "../05844_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
