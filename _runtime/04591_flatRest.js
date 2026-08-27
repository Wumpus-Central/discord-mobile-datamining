// === Module 4591: flatRest ===

// Module 4591 (flatRest)
import shortOut from "shortOut" /* 4592 */;
import overRest from "overRest" /* 4596 */;
import flatten from "flatten" /* 4598 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};