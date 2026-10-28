// === Module 8907: baseRest ===

// Module 8907 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5824 */;
import overRest from "overRest" /* 5828 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};