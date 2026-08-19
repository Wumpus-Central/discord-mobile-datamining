// === Module 4615: flatRest ===

// Module 4615 (flatRest)
import shortOut from "shortOut" /* 4616 */;
import overRest from "overRest" /* 4620 */;
import flatten from "flatten" /* 4622 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};