// _runtime/metro/06081__.js
import shortOut from "../06082_shortOut.js";
import overRest from "../06086_overRest.js";
import flatten from "../06088_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
