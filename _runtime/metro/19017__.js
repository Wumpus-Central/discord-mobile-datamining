// === Module 19017: ? ===

// Module 19017
import _mod19018 from "module_19018" /* 19018 */;
import capitalize from "capitalize" /* 19026 */;


export default _mod19018((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});