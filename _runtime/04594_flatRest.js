// === Module 4594: flatRest ===

// Module 4594 (flatRest)
import shortOut from "shortOut" /* 4595 */;
import overRest from "overRest" /* 4599 */;
import flatten from "flatten" /* 4601 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};