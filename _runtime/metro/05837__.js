// === Module 5837: ? ===

// Module 5837
import shortOut from "shortOut" /* 5838 */;
import overRest from "overRest" /* 5842 */;
import flatten from "flatten" /* 5844 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};