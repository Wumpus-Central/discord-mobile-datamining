// === Module 17933: ? ===

// Module 17933
import _mod17934 from "module_17934" /* 17934 */;
import capitalize from "capitalize" /* 17942 */;


export default _mod17934((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});