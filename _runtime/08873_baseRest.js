// === Module 8873: baseRest ===

// Module 8873 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5789 */;
import overRest from "overRest" /* 5793 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};