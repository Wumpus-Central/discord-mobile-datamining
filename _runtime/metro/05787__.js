// === Module 5787: ? ===

// Module 5787
import shortOut from "shortOut" /* 5788 */;
import overRest from "overRest" /* 5792 */;
import flatten from "flatten" /* 5794 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};