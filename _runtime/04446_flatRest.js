// _runtime/04446_flatRest.js
import { shortOut } from "04447_shortOut.js";
import { overRest } from "04451_overRest.js";
import { flatten } from "04453_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};