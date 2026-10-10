// === Module 5185: ? ===

// Module 5185
import shortOut from "shortOut" /* 5186 */;
import overRest from "overRest" /* 5190 */;
import flatten from "flatten" /* 5192 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};