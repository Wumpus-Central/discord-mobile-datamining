// === Module 4993: ? ===

// Module 4993
import shortOut from "shortOut" /* 4994 */;
import overRest from "overRest" /* 4998 */;
import flatten from "flatten" /* 5000 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};