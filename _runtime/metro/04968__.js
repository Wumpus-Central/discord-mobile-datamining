// === Module 4968: ? ===

// Module 4968
import shortOut from "shortOut" /* 4969 */;
import overRest from "overRest" /* 4973 */;
import flatten from "flatten" /* 4975 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};