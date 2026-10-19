// === Module 8793: baseRest ===

// Module 8793 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5749 */;
import overRest from "overRest" /* 5753 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};