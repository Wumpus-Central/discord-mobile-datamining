// === Module 5832: ? ===

// Module 5832
import shortOut from "shortOut" /* 5833 */;
import overRest from "overRest" /* 5837 */;
import flatten from "flatten" /* 5839 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};