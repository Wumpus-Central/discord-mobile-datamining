// _runtime/metro/05832__.js
import shortOut from "../05833_shortOut.js";
import overRest from "../05837_overRest.js";
import flatten from "../05839_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
