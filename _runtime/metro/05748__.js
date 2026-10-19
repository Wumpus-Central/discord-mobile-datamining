// === Module 5748: ? ===

// Module 5748
import shortOut from "shortOut" /* 5749 */;
import overRest from "overRest" /* 5753 */;
import flatten from "flatten" /* 5755 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};