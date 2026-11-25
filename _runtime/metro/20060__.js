// === Module 20060: ? ===

// Module 20060
import _mod20061 from "module_20061" /* 20061 */;
import capitalize from "capitalize" /* 20068 */;


export default _mod20061((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});