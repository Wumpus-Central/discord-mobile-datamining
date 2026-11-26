// _runtime/metro/05916__.js
import shortOut from "../05917_shortOut.js";
import overRest from "../05921_overRest.js";
import flatten from "../05923_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
