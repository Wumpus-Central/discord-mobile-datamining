// === Module 4952: ? ===

// Module 4952
import _mod1281 from "module_1281" /* 1281 */;
import _mod4900 from "module_4900" /* 4900 */;

let closure_2 = _mod1281("%Object.isExtensible%", true);

export default _mod1281("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod4900(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod4900(arg0);
});