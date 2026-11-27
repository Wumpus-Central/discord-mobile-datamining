// === Module 20182: ? ===

// Module 20182
import _mod20183 from "module_20183" /* 20183 */;
import capitalize from "capitalize" /* 20190 */;


export default _mod20183((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});