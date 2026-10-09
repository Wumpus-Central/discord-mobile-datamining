// === Module 5184: ? ===

// Module 5184
import shortOut from "shortOut" /* 5185 */;
import overRest from "overRest" /* 5189 */;
import flatten from "flatten" /* 5191 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};