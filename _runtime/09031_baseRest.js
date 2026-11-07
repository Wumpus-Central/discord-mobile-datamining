// === Module 9031: baseRest ===

// Module 9031 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5967 */;
import overRest from "overRest" /* 5971 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};