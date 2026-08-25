// _runtime/04526_flatRest.js
import shortOut from "04527_shortOut.js";
import overRest from "04531_overRest.js";
import flatten from "04533_flatten.js";


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};