// _runtime/04580_mod.js
import { 00566__ } from "metro/00566__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return 00566__(sum);
};