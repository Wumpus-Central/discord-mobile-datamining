// _runtime/05370_mod.js
import _mod1318 from "metro/01318__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1318;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
}
