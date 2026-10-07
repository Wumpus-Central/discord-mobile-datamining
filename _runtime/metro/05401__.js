// === Module 5401: ? ===

// Module 5401
import _mod1292 from "module_1292" /* 1292 */;
import _mod5349 from "module_5349" /* 5349 */;

let closure_2 = _mod1292("%Object.isExtensible%", true);

export default _mod1292("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5349(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5349(arg0);
});