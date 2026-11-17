// === Module 6141: ? ===

// Module 6141
import shortOut from "shortOut" /* 6142 */;
import overRest from "overRest" /* 6146 */;
import flatten from "flatten" /* 6148 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};