// _runtime/04592_flatRest.js
import shortOut from "04593_shortOut.js";
import overRest from "04597_overRest.js";
import flatten from "04599_flatten.js";


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};