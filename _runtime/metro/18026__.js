// === Module 18026: ? ===

// Module 18026
import _mod18027 from "module_18027" /* 18027 */;
import capitalize from "capitalize" /* 18035 */;


export default _mod18027((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});