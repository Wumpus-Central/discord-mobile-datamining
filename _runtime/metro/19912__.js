// === Module 19912: ? ===

// Module 19912
import _mod19913 from "module_19913" /* 19913 */;
import capitalize from "capitalize" /* 19920 */;


export default _mod19913((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});