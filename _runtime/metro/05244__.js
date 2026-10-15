// _runtime/metro/05244__.js
import shortOut from "../05245_shortOut.js";
import overRest from "../05249_overRest.js";
import flatten from "../05251_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
