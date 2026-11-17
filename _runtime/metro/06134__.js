// === Module 6134: ? ===

// Module 6134
import shortOut from "shortOut" /* 6135 */;
import overRest from "overRest" /* 6139 */;
import flatten from "flatten" /* 6141 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};