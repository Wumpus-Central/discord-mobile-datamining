// _runtime/08587_baseRest.js
import identity from "00634_identity.js";
import shortOut from "04592_shortOut.js";
import overRest from "04596_overRest.js";


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};