// === Module 19494: ? ===

// Module 19494
import _mod19495 from "module_19495" /* 19495 */;
import capitalize from "capitalize" /* 19502 */;


export default _mod19495((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});