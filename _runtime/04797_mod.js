// _runtime/04797_mod.js
import _mod563 from "metro/00563__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod563(sum);
}
