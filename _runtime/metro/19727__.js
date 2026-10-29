// === Module 19727: ? ===

// Module 19727
import _mod19728 from "module_19728" /* 19728 */;
import capitalize from "capitalize" /* 19735 */;


export default _mod19728((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});