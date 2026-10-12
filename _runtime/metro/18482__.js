// === Module 18482: ? ===

// Module 18482
import _mod18483 from "module_18483" /* 18483 */;
import capitalize from "capitalize" /* 18491 */;


export default _mod18483((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});