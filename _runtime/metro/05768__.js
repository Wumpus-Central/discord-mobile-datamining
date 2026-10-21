// _runtime/metro/05768__.js
import shortOut from "../05769_shortOut.js";
import overRest from "../05773_overRest.js";
import flatten from "../05775_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
