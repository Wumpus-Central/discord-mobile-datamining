// === Module 5713: ? ===

// Module 5713
import _mod1305 from "module_1305" /* 1305 */;
import _mod5661 from "module_5661" /* 5661 */;

let closure_2 = _mod1305("%Object.isExtensible%", true);

export default _mod1305("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5661(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5661(arg0);
});