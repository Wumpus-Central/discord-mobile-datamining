// === Module 5363: ? ===

// Module 5363
import _mod1318 from "module_1318" /* 1318 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1318(sum);
};