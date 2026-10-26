// === Module 19183: ? ===

// Module 19183
import _mod19184 from "module_19184" /* 19184 */;
import capitalize from "capitalize" /* 19191 */;


export default _mod19184((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});