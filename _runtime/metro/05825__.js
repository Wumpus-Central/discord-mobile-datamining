// _runtime/metro/05825__.js
import shortOut from "../05826_shortOut.js";
import overRest from "../05830_overRest.js";
import flatten from "../05832_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
