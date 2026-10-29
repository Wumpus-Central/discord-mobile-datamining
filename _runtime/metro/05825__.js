// === Module 5825: ? ===

// Module 5825
import shortOut from "shortOut" /* 5826 */;
import overRest from "overRest" /* 5830 */;
import flatten from "flatten" /* 5832 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};