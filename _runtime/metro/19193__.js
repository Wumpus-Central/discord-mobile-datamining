// === Module 19193: ? ===

// Module 19193
import _mod19194 from "module_19194" /* 19194 */;
import capitalize from "capitalize" /* 19201 */;


export default _mod19194((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});