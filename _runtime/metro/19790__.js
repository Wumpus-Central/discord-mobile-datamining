// === Module 19790: ? ===

// Module 19790
import _mod19791 from "module_19791" /* 19791 */;
import capitalize from "capitalize" /* 19798 */;


export default _mod19791((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});