// === Module 19179: ? ===

// Module 19179
import _mod19180 from "module_19180" /* 19180 */;
import capitalize from "capitalize" /* 19187 */;


export default _mod19180((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});