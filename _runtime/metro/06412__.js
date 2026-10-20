// === Module 6412: ? ===

// Module 6412
import _mod1307 from "module_1307" /* 1307 */;
import _mod6360 from "module_6360" /* 6360 */;

let closure_2 = _mod1307("%Object.isExtensible%", true);

export default _mod1307("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod6360(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod6360(arg0);
});