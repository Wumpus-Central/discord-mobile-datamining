// _runtime/metro/05189__.js
import shortOut from "../05190_shortOut.js";
import overRest from "../05194_overRest.js";
import flatten from "../05196_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
