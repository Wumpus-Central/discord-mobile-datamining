// === Module 17452: ? ===

// Module 17452
import _mod17453 from "module_17453" /* 17453 */;
import capitalize from "capitalize" /* 17461 */;


export default _mod17453((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});