// _runtime/07910_baseRest.js
import identity from "00634_identity.js";
import shortOut from "04527_shortOut.js";
import overRest from "04531_overRest.js";


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};