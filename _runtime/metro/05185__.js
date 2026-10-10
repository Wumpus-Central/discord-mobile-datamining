// _runtime/metro/05185__.js
import shortOut from "../05186_shortOut.js";
import overRest from "../05190_overRest.js";
import flatten from "../05192_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
