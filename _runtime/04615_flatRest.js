// _runtime/04615_flatRest.js
import { shortOut } from "04616_shortOut.js";
import { overRest } from "04620_overRest.js";
import { flatten } from "04622_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};