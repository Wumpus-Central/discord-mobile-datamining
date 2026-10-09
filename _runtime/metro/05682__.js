// === Module 5682: ? ===

// Module 5682
import _mod1331 from "module_1331" /* 1331 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1331(sum);
};