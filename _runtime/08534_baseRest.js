// === Module 8534: baseRest ===

// Module 8534 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4743 */;
import overRest from "overRest" /* 4747 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};