// === Module 4626: flatRest ===

// Module 4626 (flatRest)
import shortOut from "shortOut" /* 4627 */;
import overRest from "overRest" /* 4631 */;
import flatten from "flatten" /* 4633 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};