// === Module 6527: ? ===

// Module 6527
import _mod1292 from "module_1292" /* 1292 */;
import _mod6475 from "module_6475" /* 6475 */;

let closure_2 = _mod1292("%Object.isExtensible%", true);

export default _mod1292("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod6475(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod6475(arg0);
});