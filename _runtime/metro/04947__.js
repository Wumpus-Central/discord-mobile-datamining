// _runtime/metro/04947__.js
import shortOut from "../04948_shortOut.js";
import overRest from "../04952_overRest.js";
import flatten from "../04954_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
