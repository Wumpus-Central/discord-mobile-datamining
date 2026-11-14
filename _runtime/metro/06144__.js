// _runtime/metro/06144__.js
import shortOut from "../06145_shortOut.js";
import overRest from "../06149_overRest.js";
import flatten from "../06151_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
}
