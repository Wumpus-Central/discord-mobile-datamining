// === Module 20682: ? ===

// Module 20682
import _mod20683 from "module_20683" /* 20683 */;
import capitalize from "capitalize" /* 20690 */;


export default _mod20683((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});