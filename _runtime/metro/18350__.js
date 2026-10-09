// === Module 18350: ? ===

// Module 18350
import _mod18351 from "module_18351" /* 18351 */;
import capitalize from "capitalize" /* 18359 */;


export default _mod18351((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});