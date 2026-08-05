// _runtime/04427_flatRest.js
import { shortOut } from "04428_shortOut.js";
import { overRest } from "04432_overRest.js";
import { flatten } from "04434_flatten.js";

export default function flatRest(arg0) {
  const tmp = shortOut /* shortOut */;
  return tmp(overRest /* overRest */(arg0, undefined, flatten /* flatten */), "" + arg0);
};