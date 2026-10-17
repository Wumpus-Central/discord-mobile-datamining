// _runtime/metro/05284__.js
import shortOut from "../05285_shortOut.js";
import overRest from "../05289_overRest.js";
import flatten from "../05291_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
