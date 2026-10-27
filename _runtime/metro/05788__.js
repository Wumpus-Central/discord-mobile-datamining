// === Module 5788: ? ===

// Module 5788
import shortOut from "shortOut" /* 5789 */;
import overRest from "overRest" /* 5793 */;
import flatten from "flatten" /* 5795 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};