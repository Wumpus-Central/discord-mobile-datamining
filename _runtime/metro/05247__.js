// _runtime/metro/05247__.js
import shortOut from "../05248_shortOut.js";
import overRest from "../05252_overRest.js";
import flatten from "../05254_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
