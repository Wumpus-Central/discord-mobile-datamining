// === Module 8722: baseRest ===

// Module 8722 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5245 */;
import overRest from "overRest" /* 5249 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};