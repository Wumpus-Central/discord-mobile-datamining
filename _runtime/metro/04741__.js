// _runtime/metro/04741__.js
import shortOut from "../04742_shortOut.js";
import overRest from "../04746_overRest.js";
import flatten from "../04748_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
