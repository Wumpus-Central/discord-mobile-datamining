// === Module 18917: ? ===

// Module 18917
import _mod18918 from "module_18918" /* 18918 */;
import capitalize from "capitalize" /* 18926 */;


export default _mod18918((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});