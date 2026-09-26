// === Module 4938: ? ===

// Module 4938
import shortOut from "shortOut" /* 4939 */;
import overRest from "overRest" /* 4943 */;
import flatten from "flatten" /* 4945 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};