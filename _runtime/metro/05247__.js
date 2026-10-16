// === Module 5247: ? ===

// Module 5247
import shortOut from "shortOut" /* 5248 */;
import overRest from "overRest" /* 5252 */;
import flatten from "flatten" /* 5254 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};