// _runtime/metro/04929__.js
import shortOut from "../04930_shortOut.js";
import overRest from "../04934_overRest.js";
import flatten from "../04936_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
