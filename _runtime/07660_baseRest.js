// _runtime/07660_baseRest.js
import { identity } from "00634_identity.js";
import { shortOut } from "04398_shortOut.js";
import { overRest } from "04402_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};