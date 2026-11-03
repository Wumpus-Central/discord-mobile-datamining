// === Module 20004: ? ===

// Module 20004
import _mod20005 from "module_20005" /* 20005 */;
import capitalize from "capitalize" /* 20012 */;


export default _mod20005((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});