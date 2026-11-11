// === Module 20482: ? ===

// Module 20482
import _mod20483 from "module_20483" /* 20483 */;
import capitalize from "capitalize" /* 20490 */;


export default _mod20483((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});