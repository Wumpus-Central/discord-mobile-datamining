// === Module 5993: ? ===

// Module 5993
import shortOut from "shortOut" /* 5994 */;
import overRest from "overRest" /* 5998 */;
import flatten from "flatten" /* 6000 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};