// === Module 4947: ? ===

// Module 4947
import shortOut from "shortOut" /* 4948 */;
import overRest from "overRest" /* 4952 */;
import flatten from "flatten" /* 4954 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};