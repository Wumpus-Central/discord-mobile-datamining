// === Module 5608: ? ===

// Module 5608
import shortOut from "shortOut" /* 5609 */;
import overRest from "overRest" /* 5613 */;
import flatten from "flatten" /* 5615 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};