// === Module 7152: baseRest ===

// Module 7152 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5609 */;
import overRest from "overRest" /* 5613 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};