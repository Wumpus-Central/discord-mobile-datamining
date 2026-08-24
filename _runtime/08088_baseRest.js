// _runtime/08088_baseRest.js
import identity from "00634_identity.js";
import shortOut from "04622_shortOut.js";
import overRest from "04626_overRest.js";


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};