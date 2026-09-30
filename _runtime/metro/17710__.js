// === Module 17710: ? ===

// Module 17710
import _mod17711 from "module_17711" /* 17711 */;
import capitalize from "capitalize" /* 17719 */;


export default _mod17711((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});