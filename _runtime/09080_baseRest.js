// === Module 9080: baseRest ===

// Module 9080 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5958 */;
import overRest from "overRest" /* 5962 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};