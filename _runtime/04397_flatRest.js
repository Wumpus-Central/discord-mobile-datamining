// _runtime/04397_flatRest.js
import { shortOut } from "04398_shortOut.js";
import { overRest } from "04402_overRest.js";
import { flatten } from "04404_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};