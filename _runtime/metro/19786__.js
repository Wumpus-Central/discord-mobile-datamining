// === Module 19786: ? ===

// Module 19786
import _mod19787 from "module_19787" /* 19787 */;
import capitalize from "capitalize" /* 19794 */;


export default _mod19787((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});