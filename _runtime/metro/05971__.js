// === Module 5971: ? ===

// Module 5971
import shortOut from "shortOut" /* 5972 */;
import overRest from "overRest" /* 5976 */;
import flatten from "flatten" /* 5978 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};