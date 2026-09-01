// _runtime/04796_mod.js
import _mod566 from "metro/00566__.js";


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod566(sum);
};