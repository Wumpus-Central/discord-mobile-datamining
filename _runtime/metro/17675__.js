// === Module 17675: ? ===

// Module 17675
import _mod17676 from "module_17676" /* 17676 */;
import capitalize from "capitalize" /* 17684 */;


export default _mod17676((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});