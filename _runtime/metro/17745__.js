// === Module 17745: ? ===

// Module 17745
import _mod17746 from "module_17746" /* 17746 */;
import capitalize from "capitalize" /* 17754 */;


export default _mod17746((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});