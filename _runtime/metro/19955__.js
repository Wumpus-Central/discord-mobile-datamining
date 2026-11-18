// === Module 19955: ? ===

// Module 19955
import _mod19956 from "module_19956" /* 19956 */;
import capitalize from "capitalize" /* 19963 */;


export default _mod19956((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});