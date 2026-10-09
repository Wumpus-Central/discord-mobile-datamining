// _runtime/metro/05184__.js
import shortOut from "../05185_shortOut.js";
import overRest from "../05189_overRest.js";
import flatten from "../05191_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
