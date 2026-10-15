// === Module 18761: ? ===

// Module 18761
import _mod18762 from "module_18762" /* 18762 */;
import capitalize from "capitalize" /* 18770 */;


export default _mod18762((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});