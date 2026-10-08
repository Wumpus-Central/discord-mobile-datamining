// === Module 5681: ? ===

// Module 5681
import _mod1330 from "module_1330" /* 1330 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1330(sum);
};