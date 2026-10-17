// === Module 5284: ? ===

// Module 5284
import shortOut from "shortOut" /* 5285 */;
import overRest from "overRest" /* 5289 */;
import flatten from "flatten" /* 5291 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};