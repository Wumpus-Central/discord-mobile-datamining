// _runtime/04591_flatRest.js
import shortOut from "04592_shortOut.js";
import overRest from "04596_overRest.js";
import flatten from "04598_flatten.js";


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};