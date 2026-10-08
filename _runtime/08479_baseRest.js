// === Module 8479: baseRest ===

// Module 8479 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5184 */;
import overRest from "overRest" /* 5188 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};