// === Module 7272: baseRest ===

// Module 7272 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5728 */;
import overRest from "overRest" /* 5732 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};