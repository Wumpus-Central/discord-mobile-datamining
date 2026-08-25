// === Module 7910: baseRest ===

// Module 7910 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4527 */;
import overRest from "overRest" /* 4531 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};