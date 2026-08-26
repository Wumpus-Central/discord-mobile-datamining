// === Module 7977: baseRest ===

// Module 7977 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4591 */;
import overRest from "overRest" /* 4595 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};