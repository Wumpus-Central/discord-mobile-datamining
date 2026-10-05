// === Module 17855: ? ===

// Module 17855
import _mod17856 from "module_17856" /* 17856 */;
import capitalize from "capitalize" /* 17864 */;


export default _mod17856((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});