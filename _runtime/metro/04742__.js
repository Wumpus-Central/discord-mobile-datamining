// _runtime/metro/04742__.js
import shortOut from "../04743_shortOut.js";
import overRest from "../04747_overRest.js";
import flatten from "../04749_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
