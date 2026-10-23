// === Module 8871: baseRest ===

// Module 8871 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5786 */;
import overRest from "overRest" /* 5790 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};