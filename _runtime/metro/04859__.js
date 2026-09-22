// _runtime/metro/04859__.js
import shortOut from "../04860_shortOut.js";
import overRest from "../04864_overRest.js";
import flatten from "../04866_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
