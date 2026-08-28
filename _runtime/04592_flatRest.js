// === Module 4592: flatRest ===

// Module 4592 (flatRest)
import shortOut from "shortOut" /* 4593 */;
import overRest from "overRest" /* 4597 */;
import flatten from "flatten" /* 4599 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};