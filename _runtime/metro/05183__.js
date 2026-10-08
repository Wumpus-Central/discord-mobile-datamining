// _runtime/metro/05183__.js
import shortOut from "../05184_shortOut.js";
import overRest from "../05188_overRest.js";
import flatten from "../05190_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
