// === Module 18106: ? ===

// Module 18106
import _mod18107 from "module_18107" /* 18107 */;
import capitalize from "capitalize" /* 18115 */;


export default _mod18107((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});