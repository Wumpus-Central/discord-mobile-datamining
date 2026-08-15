// _runtime/04422_floor.js
import { 00566__ } from "metro/00566__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = 00566__(arg0);
  }
  return tmp;
};