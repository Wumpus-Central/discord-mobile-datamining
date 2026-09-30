// === Module 8028: baseRest ===

// Module 8028 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4969 */;
import overRest from "overRest" /* 4973 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};