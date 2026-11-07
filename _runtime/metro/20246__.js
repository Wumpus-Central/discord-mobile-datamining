// === Module 20246: ? ===

// Module 20246
import _mod20247 from "module_20247" /* 20247 */;
import capitalize from "capitalize" /* 20254 */;


export default _mod20247((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});