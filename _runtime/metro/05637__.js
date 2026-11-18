// _runtime/metro/05637__.js
import shortOut from "../05638_shortOut.js";
import overRest from "../05642_overRest.js";
import flatten from "../05644_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
