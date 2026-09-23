// === Module 4929: ? ===

// Module 4929
import shortOut from "shortOut" /* 4930 */;
import overRest from "overRest" /* 4934 */;
import flatten from "flatten" /* 4936 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};