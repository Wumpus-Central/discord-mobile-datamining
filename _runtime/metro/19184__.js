// === Module 19184: ? ===

// Module 19184
import _mod19185 from "module_19185" /* 19185 */;
import capitalize from "capitalize" /* 19192 */;


export default _mod19185((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});