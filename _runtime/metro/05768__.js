// === Module 5768: ? ===

// Module 5768
import shortOut from "shortOut" /* 5769 */;
import overRest from "overRest" /* 5773 */;
import flatten from "flatten" /* 5775 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};