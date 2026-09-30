// _runtime/metro/04968__.js
import shortOut from "../04969_shortOut.js";
import overRest from "../04973_overRest.js";
import flatten from "../04975_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
