// === Module 5773: ? ===

// Module 5773
import shortOut from "shortOut" /* 5774 */;
import overRest from "overRest" /* 5778 */;
import flatten from "flatten" /* 5780 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};