// === Module 18198: ? ===

// Module 18198
import _mod18199 from "module_18199" /* 18199 */;
import capitalize from "capitalize" /* 18207 */;


export default _mod18199((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});