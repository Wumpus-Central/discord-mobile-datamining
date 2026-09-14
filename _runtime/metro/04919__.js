// === Module 4919: ? ===

// Module 4919
import _mod1306 from "module_1306" /* 1306 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1306(sum);
};