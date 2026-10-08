// === Module 18188: ? ===

// Module 18188
import _mod18189 from "module_18189" /* 18189 */;
import capitalize from "capitalize" /* 18197 */;


export default _mod18189((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});