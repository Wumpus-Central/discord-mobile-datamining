// === Module 18221: ? ===

// Module 18221
import _mod18222 from "module_18222" /* 18222 */;
import capitalize from "capitalize" /* 18230 */;


export default _mod18222((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});