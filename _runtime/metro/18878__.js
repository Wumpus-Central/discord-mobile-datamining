// === Module 18878: ? ===

// Module 18878
import _mod18879 from "module_18879" /* 18879 */;
import capitalize from "capitalize" /* 18887 */;


export default _mod18879((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});