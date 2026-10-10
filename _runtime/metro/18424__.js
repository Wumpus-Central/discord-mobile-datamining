// === Module 18424: ? ===

// Module 18424
import _mod18425 from "module_18425" /* 18425 */;
import capitalize from "capitalize" /* 18433 */;


export default _mod18425((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});