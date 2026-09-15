// === Module 8506: baseRest ===

// Module 8506 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4742 */;
import overRest from "overRest" /* 4746 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};