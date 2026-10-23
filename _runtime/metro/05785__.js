// === Module 5785: ? ===

// Module 5785
import shortOut from "shortOut" /* 5786 */;
import overRest from "overRest" /* 5790 */;
import flatten from "flatten" /* 5792 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};