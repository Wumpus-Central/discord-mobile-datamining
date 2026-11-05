// === Module 9103: baseRest ===

// Module 9103 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5975 */;
import overRest from "overRest" /* 5979 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};