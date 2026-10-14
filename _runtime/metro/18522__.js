// === Module 18522: ? ===

// Module 18522
import _mod18523 from "module_18523" /* 18523 */;
import capitalize from "capitalize" /* 18531 */;


export default _mod18523((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});