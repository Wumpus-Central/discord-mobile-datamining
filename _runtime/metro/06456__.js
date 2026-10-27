// === Module 6456: ? ===

// Module 6456
import _mod1304 from "module_1304" /* 1304 */;
import _mod6404 from "module_6404" /* 6404 */;

let closure_2 = _mod1304("%Object.isExtensible%", true);

export default _mod1304("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod6404(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod6404(arg0);
});