// _runtime/metro/05748__.js
import shortOut from "../05749_shortOut.js";
import overRest from "../05753_overRest.js";
import flatten from "../05755_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
