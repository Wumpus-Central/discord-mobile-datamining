// === Module 20177: ? ===

// Module 20177
import _mod20178 from "module_20178" /* 20178 */;
import capitalize from "capitalize" /* 20185 */;


export default _mod20178((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});