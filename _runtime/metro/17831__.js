// === Module 17831: ? ===

// Module 17831
import _mod17832 from "module_17832" /* 17832 */;
import capitalize from "capitalize" /* 17840 */;


export default _mod17832((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});