// === Module 9097: baseRest ===

// Module 9097 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5972 */;
import overRest from "overRest" /* 5976 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};