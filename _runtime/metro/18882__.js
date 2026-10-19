// === Module 18882: ? ===

// Module 18882
import _mod18883 from "module_18883" /* 18883 */;
import capitalize from "capitalize" /* 18891 */;


export default _mod18883((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});