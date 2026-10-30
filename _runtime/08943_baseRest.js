// === Module 8943: baseRest ===

// Module 8943 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5833 */;
import overRest from "overRest" /* 5837 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};