// _runtime/metro/05608__.js
import shortOut from "../05609_shortOut.js";
import overRest from "../05613_overRest.js";
import flatten from "../05615_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
