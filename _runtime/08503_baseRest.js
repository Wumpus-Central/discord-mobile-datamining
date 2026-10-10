// === Module 8503: baseRest ===

// Module 8503 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5186 */;
import overRest from "overRest" /* 5190 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};