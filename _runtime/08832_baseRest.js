// === Module 8832: baseRest ===

// Module 8832 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5769 */;
import overRest from "overRest" /* 5773 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};