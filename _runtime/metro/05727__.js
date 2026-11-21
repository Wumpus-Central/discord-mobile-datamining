// _runtime/metro/05727__.js
import shortOut from "../05728_shortOut.js";
import overRest from "../05732_overRest.js";
import flatten from "../05734_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
