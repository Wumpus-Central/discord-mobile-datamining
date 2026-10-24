// === Module 6424: ? ===

// Module 6424
import _mod1333 from "module_1333" /* 1333 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1333(sum);
};