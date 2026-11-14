// === Module 20632: ? ===

// Module 20632
import _mod20633 from "module_20633" /* 20633 */;
import capitalize from "capitalize" /* 20640 */;


export default _mod20633((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});