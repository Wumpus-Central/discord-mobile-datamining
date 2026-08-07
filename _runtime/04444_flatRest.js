// _runtime/04444_flatRest.js
import { shortOut } from "04445_shortOut.js";
import { overRest } from "04449_overRest.js";
import { flatten } from "04451_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};