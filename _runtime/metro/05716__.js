// === Module 5716: ? ===

// Module 5716
import _mod1305 from "module_1305" /* 1305 */;
import _mod5664 from "module_5664" /* 5664 */;

let closure_2 = _mod1305("%Object.isExtensible%", true);

export default _mod1305("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5664(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5664(arg0);
});