// _runtime/metro/05823__.js
import shortOut from "../05824_shortOut.js";
import overRest from "../05828_overRest.js";
import flatten from "../05830_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
