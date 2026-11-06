// _runtime/metro/05993__.js
import shortOut from "../05994_shortOut.js";
import overRest from "../05998_overRest.js";
import flatten from "../06000_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
