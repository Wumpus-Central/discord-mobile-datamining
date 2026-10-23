// === Module 19151: ? ===

// Module 19151
import _mod19152 from "module_19152" /* 19152 */;
import capitalize from "capitalize" /* 19160 */;


export default _mod19152((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});