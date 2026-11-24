// _runtime/metro/05790__.js
import shortOut from "../05791_shortOut.js";
import overRest from "../05795_overRest.js";
import flatten from "../05797_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
