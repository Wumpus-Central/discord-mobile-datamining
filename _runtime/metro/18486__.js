// === Module 18486: ? ===

// Module 18486
import _mod18487 from "module_18487" /* 18487 */;
import capitalize from "capitalize" /* 18495 */;


export default _mod18487((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});