// === Module 4843: ? ===

// Module 4843
import _mod1308 from "module_1308" /* 1308 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1308(sum);
};