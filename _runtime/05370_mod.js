// === Module 5370: mod ===

// Module 5370 (mod)
import _mod1318 from "module_1318" /* 1318 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1318;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
};