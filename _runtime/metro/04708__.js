// _runtime/metro/04708__.js
import shortOut from "../04709_shortOut.js";
import overRest from "../04713_overRest.js";
import flatten from "../04715_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
