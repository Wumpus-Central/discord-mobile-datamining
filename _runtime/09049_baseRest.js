// === Module 9049: baseRest ===

// Module 9049 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5994 */;
import overRest from "overRest" /* 5998 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};