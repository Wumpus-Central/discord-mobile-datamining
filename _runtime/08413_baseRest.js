// === Module 8413: baseRest ===

// Module 8413 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4677 */;
import overRest from "overRest" /* 4681 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};