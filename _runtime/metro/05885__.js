// === Module 5885: ? ===

// Module 5885
import shortOut from "shortOut" /* 5886 */;
import overRest from "overRest" /* 5890 */;
import flatten from "flatten" /* 5892 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};