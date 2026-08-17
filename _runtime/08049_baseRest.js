// _runtime/08049_baseRest.js
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4616 */;
import overRest from "overRest" /* 4620 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};