// === Module 20287: ? ===

// Module 20287
import _mod20288 from "module_20288" /* 20288 */;
import capitalize from "capitalize" /* 20295 */;


export default _mod20288((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});