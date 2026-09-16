// _runtime/metro/04740__.js
import shortOut from "../04741_shortOut.js";
import overRest from "../04745_overRest.js";
import flatten from "../04747_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
