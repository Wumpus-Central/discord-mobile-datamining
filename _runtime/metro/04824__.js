// === Module 4824: ? ===

// Module 4824
import shortOut from "shortOut" /* 4825 */;
import overRest from "overRest" /* 4829 */;
import flatten from "flatten" /* 4831 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};