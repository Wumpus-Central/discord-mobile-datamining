// === Module 18803: ? ===

// Module 18803
import _mod18804 from "module_18804" /* 18804 */;
import capitalize from "capitalize" /* 18812 */;


export default _mod18804((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});