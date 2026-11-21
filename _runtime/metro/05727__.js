// === Module 5727: ? ===

// Module 5727
import shortOut from "shortOut" /* 5728 */;
import overRest from "overRest" /* 5732 */;
import flatten from "flatten" /* 5734 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};