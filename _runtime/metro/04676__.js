// === Module 4676: ? ===

// Module 4676
import shortOut from "shortOut" /* 4677 */;
import overRest from "overRest" /* 4681 */;
import flatten from "flatten" /* 4683 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};