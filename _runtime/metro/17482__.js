// === Module 17482: ? ===

// Module 17482
import _mod17483 from "module_17483" /* 17483 */;
import capitalize from "capitalize" /* 17491 */;


export default _mod17483((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});