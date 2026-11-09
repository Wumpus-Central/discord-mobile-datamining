// === Module 20259: ? ===

// Module 20259
import _mod20260 from "module_20260" /* 20260 */;
import capitalize from "capitalize" /* 20267 */;


export default _mod20260((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});