// === Module 6490: ? ===

// Module 6490
import _mod1319 from "module_1319" /* 1319 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1319(sum);
};