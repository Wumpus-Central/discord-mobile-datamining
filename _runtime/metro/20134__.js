// === Module 20134: ? ===

// Module 20134
import _mod20135 from "module_20135" /* 20135 */;
import capitalize from "capitalize" /* 20142 */;


export default _mod20135((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});