// === Module 7833: baseRest ===

// Module 7833 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4939 */;
import overRest from "overRest" /* 4943 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};