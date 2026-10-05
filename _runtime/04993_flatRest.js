// === Module 4993: flatRest ===

// Module 4993 (flatRest)
import shortOut from "shortOut" /* 4994 */;
import overRest from "overRest" /* 4998 */;
import flatten from "flatten" /* 5000 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};