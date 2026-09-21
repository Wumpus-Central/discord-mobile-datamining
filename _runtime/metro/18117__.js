// === Module 18117: ? ===

// Module 18117
import _mod18118 from "module_18118" /* 18118 */;
import capitalize from "capitalize" /* 18126 */;


export default _mod18118((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});