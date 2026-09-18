// _runtime/metro/04824__.js
import shortOut from "../04825_shortOut.js";
import overRest from "../04829_overRest.js";
import flatten from "../04831_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
