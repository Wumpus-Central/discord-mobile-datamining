// _runtime/metro/05787__.js
import shortOut from "../05788_shortOut.js";
import overRest from "../05792_overRest.js";
import flatten from "../05794_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
