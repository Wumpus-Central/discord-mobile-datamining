// === Module 19854: ? ===

// Module 19854
import _mod19855 from "module_19855" /* 19855 */;
import capitalize from "capitalize" /* 19862 */;


export default _mod19855((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});