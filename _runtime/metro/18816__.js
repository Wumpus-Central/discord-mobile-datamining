// === Module 18816: ? ===

// Module 18816
import _mod18817 from "module_18817" /* 18817 */;
import capitalize from "capitalize" /* 18825 */;


export default _mod18817((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});