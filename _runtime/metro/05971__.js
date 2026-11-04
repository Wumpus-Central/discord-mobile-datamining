// _runtime/metro/05971__.js
import shortOut from "../05972_shortOut.js";
import overRest from "../05976_overRest.js";
import flatten from "../05978_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
