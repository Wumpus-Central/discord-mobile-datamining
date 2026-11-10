// === Module 5968: ? ===

// Module 5968
import shortOut from "shortOut" /* 5969 */;
import overRest from "overRest" /* 5973 */;
import flatten from "flatten" /* 5975 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};