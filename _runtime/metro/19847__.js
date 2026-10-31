// === Module 19847: ? ===

// Module 19847
import _mod19848 from "module_19848" /* 19848 */;
import capitalize from "capitalize" /* 19855 */;


export default _mod19848((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});