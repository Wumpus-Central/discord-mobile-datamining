// === Module 5957: ? ===

// Module 5957
import shortOut from "shortOut" /* 5958 */;
import overRest from "overRest" /* 5962 */;
import flatten from "flatten" /* 5964 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};