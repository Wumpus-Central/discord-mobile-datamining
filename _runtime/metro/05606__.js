// _runtime/metro/05606__.js
import shortOut from "../05607_shortOut.js";
import overRest from "../05611_overRest.js";
import flatten from "../05613_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
