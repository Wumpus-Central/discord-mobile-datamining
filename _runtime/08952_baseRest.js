// === Module 8952: baseRest ===

// Module 8952 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5838 */;
import overRest from "overRest" /* 5842 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};