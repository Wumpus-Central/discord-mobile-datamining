// === Module 4662: ? ===

// Module 4662
import shortOut from "shortOut" /* 4663 */;
import overRest from "overRest" /* 4667 */;
import flatten from "flatten" /* 4669 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};