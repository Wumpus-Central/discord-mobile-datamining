// === Module 5244: ? ===

// Module 5244
import shortOut from "shortOut" /* 5245 */;
import overRest from "overRest" /* 5249 */;
import flatten from "flatten" /* 5251 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};