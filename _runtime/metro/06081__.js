// === Module 6081: ? ===

// Module 6081
import shortOut from "shortOut" /* 6082 */;
import overRest from "overRest" /* 6086 */;
import flatten from "flatten" /* 6088 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};