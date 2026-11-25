// === Module 7792: baseRest ===

// Module 7792 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5886 */;
import overRest from "overRest" /* 5890 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};