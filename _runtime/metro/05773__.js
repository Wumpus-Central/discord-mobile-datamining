// _runtime/metro/05773__.js
import shortOut from "../05774_shortOut.js";
import overRest from "../05778_overRest.js";
import flatten from "../05780_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
