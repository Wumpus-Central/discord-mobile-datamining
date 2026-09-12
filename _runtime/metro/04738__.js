// _runtime/metro/04738__.js
import shortOut from "../04739_shortOut.js";
import overRest from "../04743_overRest.js";
import flatten from "../04745_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
