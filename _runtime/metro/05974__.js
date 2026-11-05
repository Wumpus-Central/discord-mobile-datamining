// === Module 5974: ? ===

// Module 5974
import shortOut from "shortOut" /* 5975 */;
import overRest from "overRest" /* 5979 */;
import flatten from "flatten" /* 5981 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};