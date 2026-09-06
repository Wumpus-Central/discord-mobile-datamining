// === Module 8385: baseRest ===

// Module 8385 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4663 */;
import overRest from "overRest" /* 4667 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};