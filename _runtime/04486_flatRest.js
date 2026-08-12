// _runtime/04486_flatRest.js
import { shortOut } from "04487_shortOut.js";
import { overRest } from "04491_overRest.js";
import { flatten } from "04493_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};