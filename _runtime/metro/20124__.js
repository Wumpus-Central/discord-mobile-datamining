// === Module 20124: ? ===

// Module 20124
import _mod20125 from "module_20125" /* 20125 */;
import capitalize from "capitalize" /* 20132 */;


export default _mod20125((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});