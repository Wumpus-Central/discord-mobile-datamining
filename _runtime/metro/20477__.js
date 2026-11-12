// === Module 20477: ? ===

// Module 20477
import _mod20478 from "module_20478" /* 20478 */;
import capitalize from "capitalize" /* 20485 */;


export default _mod20478((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});