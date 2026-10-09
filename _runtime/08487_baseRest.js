// === Module 8487: baseRest ===

// Module 8487 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5185 */;
import overRest from "overRest" /* 5189 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};