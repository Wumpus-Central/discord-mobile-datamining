// === Module 7693: baseRest ===

// Module 7693 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5791 */;
import overRest from "overRest" /* 5795 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};