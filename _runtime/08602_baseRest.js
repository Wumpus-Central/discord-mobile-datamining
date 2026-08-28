// === Module 8602: baseRest ===

// Module 8602 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4593 */;
import overRest from "overRest" /* 4597 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};