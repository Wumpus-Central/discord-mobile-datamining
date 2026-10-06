// === Module 4999: flatRest ===

// Module 4999 (flatRest)
import shortOut from "shortOut" /* 5000 */;
import overRest from "overRest" /* 5004 */;
import flatten from "flatten" /* 5006 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};