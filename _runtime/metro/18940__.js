// === Module 18940: ? ===

// Module 18940
import _mod18941 from "module_18941" /* 18941 */;
import capitalize from "capitalize" /* 18949 */;


export default _mod18941((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});