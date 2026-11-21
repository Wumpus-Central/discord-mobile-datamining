// === Module 19913: ? ===

// Module 19913
import _mod19914 from "module_19914" /* 19914 */;
import capitalize from "capitalize" /* 19921 */;


export default _mod19914((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});