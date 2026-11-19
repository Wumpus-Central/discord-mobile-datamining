// === Module 5606: ? ===

// Module 5606
import shortOut from "shortOut" /* 5607 */;
import overRest from "overRest" /* 5611 */;
import flatten from "flatten" /* 5613 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};