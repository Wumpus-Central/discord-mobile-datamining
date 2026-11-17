// _runtime/metro/06141__.js
import shortOut from "../06142_shortOut.js";
import overRest from "../06146_overRest.js";
import flatten from "../06148_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
