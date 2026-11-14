// === Module 6144: ? ===

// Module 6144
import shortOut from "shortOut" /* 6145 */;
import overRest from "overRest" /* 6149 */;
import flatten from "flatten" /* 6151 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};