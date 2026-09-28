// === Module 17486: ? ===

// Module 17486
import _mod17487 from "module_17487" /* 17487 */;
import capitalize from "capitalize" /* 17495 */;


export default _mod17487((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});