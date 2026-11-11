// === Module 7604: baseRest ===

// Module 7604 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 6082 */;
import overRest from "overRest" /* 6086 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};