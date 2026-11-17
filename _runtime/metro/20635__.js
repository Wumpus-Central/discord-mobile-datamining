// === Module 20635: ? ===

// Module 20635
import _mod20636 from "module_20636" /* 20636 */;
import capitalize from "capitalize" /* 20643 */;


export default _mod20636((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});