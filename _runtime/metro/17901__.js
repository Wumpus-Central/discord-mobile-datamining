// === Module 17901: ? ===

// Module 17901
import _mod17902 from "module_17902" /* 17902 */;
import capitalize from "capitalize" /* 17910 */;


export default _mod17902((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});