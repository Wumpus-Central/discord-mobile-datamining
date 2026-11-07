// === Module 5966: ? ===

// Module 5966
import shortOut from "shortOut" /* 5967 */;
import overRest from "overRest" /* 5971 */;
import flatten from "flatten" /* 5973 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};