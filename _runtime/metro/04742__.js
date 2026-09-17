// === Module 4742: ? ===

// Module 4742
import shortOut from "shortOut" /* 4743 */;
import overRest from "overRest" /* 4747 */;
import flatten from "flatten" /* 4749 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};