// _runtime/metro/04707__.js
import shortOut from "../04708_shortOut.js";
import overRest from "../04712_overRest.js";
import flatten from "../04714_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
