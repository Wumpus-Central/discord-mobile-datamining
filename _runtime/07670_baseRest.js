// === Module 7670: baseRest ===

// Module 7670 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 6145 */;
import overRest from "overRest" /* 6149 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};