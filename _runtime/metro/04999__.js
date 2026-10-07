// === Module 4999: ? ===

// Module 4999
import shortOut from "shortOut" /* 5000 */;
import overRest from "overRest" /* 5004 */;
import flatten from "flatten" /* 5006 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};