// === Module 20170: ? ===

// Module 20170
import _mod20171 from "module_20171" /* 20171 */;
import capitalize from "capitalize" /* 20178 */;


export default _mod20171((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});