// === Module 19107: ? ===

// Module 19107
import _mod19108 from "module_19108" /* 19108 */;
import capitalize from "capitalize" /* 19116 */;


export default _mod19108((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});