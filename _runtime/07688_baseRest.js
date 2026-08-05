// _runtime/07688_baseRest.js
import { identity } from "00634_identity.js";
import { shortOut } from "04428_shortOut.js";
import { overRest } from "04432_overRest.js";

export default function baseRest(arg0, arg1) {
  const tmp = shortOut /* shortOut */;
  return tmp(overRest /* overRest */(arg0, arg1, identity /* identity */), "" + arg0);
};