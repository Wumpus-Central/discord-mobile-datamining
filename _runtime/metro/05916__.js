// === Module 5916: ? ===

// Module 5916
import shortOut from "shortOut" /* 5917 */;
import overRest from "overRest" /* 5921 */;
import flatten from "flatten" /* 5923 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};