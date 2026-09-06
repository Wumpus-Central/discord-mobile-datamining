// _runtime/04843_mod.js
import _mod1308 from "metro/01308__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1308(sum);
}
