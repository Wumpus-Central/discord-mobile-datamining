// === Module 5823: ? ===

// Module 5823
import shortOut from "shortOut" /* 5824 */;
import overRest from "overRest" /* 5828 */;
import flatten from "flatten" /* 5830 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};