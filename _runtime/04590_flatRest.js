// _runtime/04590_flatRest.js
import shortOut from "04591_shortOut.js";
import overRest from "04595_overRest.js";
import flatten from "04597_flatten.js";


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};