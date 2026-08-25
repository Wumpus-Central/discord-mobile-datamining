// === Module 4526: flatRest ===

// Module 4526 (flatRest)
import shortOut from "shortOut" /* 4527 */;
import overRest from "overRest" /* 4531 */;
import flatten from "flatten" /* 4533 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};