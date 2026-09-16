// === Module 8515: baseRest ===

// Module 8515 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4741 */;
import overRest from "overRest" /* 4745 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};