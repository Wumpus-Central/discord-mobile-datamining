// _runtime/metro/04993__.js
import shortOut from "../04994_shortOut.js";
import overRest from "../04998_overRest.js";
import flatten from "../05000_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
