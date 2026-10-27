// _runtime/metro/05788__.js
import shortOut from "../05789_shortOut.js";
import overRest from "../05793_overRest.js";
import flatten from "../05795_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
