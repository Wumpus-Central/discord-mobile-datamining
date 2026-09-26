// _runtime/metro/04938__.js
import shortOut from "../04939_shortOut.js";
import overRest from "../04943_overRest.js";
import flatten from "../04945_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
