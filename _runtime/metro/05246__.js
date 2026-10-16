// === Module 5246: ? ===

// Module 5246
import shortOut from "shortOut" /* 5247 */;
import overRest from "overRest" /* 5251 */;
import flatten from "flatten" /* 5253 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};