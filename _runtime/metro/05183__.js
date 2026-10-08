// === Module 5183: ? ===

// Module 5183
import shortOut from "shortOut" /* 5184 */;
import overRest from "overRest" /* 5188 */;
import flatten from "flatten" /* 5190 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};