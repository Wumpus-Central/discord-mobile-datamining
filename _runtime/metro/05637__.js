// === Module 5637: ? ===

// Module 5637
import shortOut from "shortOut" /* 5638 */;
import overRest from "overRest" /* 5642 */;
import flatten from "flatten" /* 5644 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};