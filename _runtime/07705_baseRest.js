// _runtime/07705_baseRest.js
import { identity } from "00634_identity.js";
import { shortOut } from "04445_shortOut.js";
import { overRest } from "04449_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};