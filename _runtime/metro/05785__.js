// _runtime/metro/05785__.js
import shortOut from "../05786_shortOut.js";
import overRest from "../05790_overRest.js";
import flatten from "../05792_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
