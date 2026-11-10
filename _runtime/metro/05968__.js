// _runtime/metro/05968__.js
import shortOut from "../05969_shortOut.js";
import overRest from "../05973_overRest.js";
import flatten from "../05975_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
