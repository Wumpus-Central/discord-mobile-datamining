// === Module 20120: ? ===

// Module 20120
import _mod20121 from "module_20121" /* 20121 */;
import capitalize from "capitalize" /* 20128 */;


export default _mod20121((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});