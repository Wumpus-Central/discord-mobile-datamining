// === Module 8671: baseRest ===

// Module 8671 (baseRest)
import identity from "identity" /* 631 */;
import shortOut from "shortOut" /* 4627 */;
import overRest from "overRest" /* 4631 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};