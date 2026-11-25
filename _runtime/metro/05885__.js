// _runtime/metro/05885__.js
import shortOut from "../05886_shortOut.js";
import overRest from "../05890_overRest.js";
import flatten from "../05892_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
