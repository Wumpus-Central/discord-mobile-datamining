// _runtime/metro/04662__.js
import shortOut from "../04663_shortOut.js";
import overRest from "../04667_overRest.js";
import flatten from "../04669_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
