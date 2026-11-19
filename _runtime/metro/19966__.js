// === Module 19966: ? ===

// Module 19966
import _mod19967 from "module_19967" /* 19967 */;
import capitalize from "capitalize" /* 19974 */;


export default _mod19967((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});