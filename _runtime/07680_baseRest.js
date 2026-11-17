// === Module 7680: baseRest ===

// Module 7680 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 6142 */;
import overRest from "overRest" /* 6146 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};