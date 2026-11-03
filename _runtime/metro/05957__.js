// _runtime/metro/05957__.js
import shortOut from "../05958_shortOut.js";
import overRest from "../05962_overRest.js";
import flatten from "../05964_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
