// === Module 19084: ? ===

// Module 19084
import _mod19085 from "module_19085" /* 19085 */;
import capitalize from "capitalize" /* 19093 */;


export default _mod19085((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});