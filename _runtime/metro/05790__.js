// === Module 5790: ? ===

// Module 5790
import shortOut from "shortOut" /* 5791 */;
import overRest from "overRest" /* 5795 */;
import flatten from "flatten" /* 5797 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};