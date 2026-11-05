// === Module 6665: ? ===

// Module 6665
import _mod1292 from "module_1292" /* 1292 */;
import _mod6613 from "module_6613" /* 6613 */;

let closure_2 = _mod1292("%Object.isExtensible%", true);

export default _mod1292("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod6613(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod6613(arg0);
});