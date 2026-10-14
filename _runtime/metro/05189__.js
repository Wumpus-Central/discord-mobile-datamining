// === Module 5189: ? ===

// Module 5189
import shortOut from "shortOut" /* 5190 */;
import overRest from "overRest" /* 5194 */;
import flatten from "flatten" /* 5196 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};