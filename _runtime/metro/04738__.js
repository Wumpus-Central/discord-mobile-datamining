// === Module 4738: ? ===

// Module 4738
import shortOut from "shortOut" /* 4739 */;
import overRest from "overRest" /* 4743 */;
import flatten from "flatten" /* 4745 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};