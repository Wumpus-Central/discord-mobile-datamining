// === Module 4931: ? ===

// Module 4931
import shortOut from "shortOut" /* 4932 */;
import overRest from "overRest" /* 4936 */;
import flatten from "flatten" /* 4938 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};