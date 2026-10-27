// === Module 19231: ? ===

// Module 19231
import _mod19232 from "module_19232" /* 19232 */;
import capitalize from "capitalize" /* 19239 */;


export default _mod19232((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});