// === Module 8017: baseRest ===

// Module 8017 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4948 */;
import overRest from "overRest" /* 4952 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};