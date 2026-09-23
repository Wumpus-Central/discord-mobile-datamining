// === Module 5154: ? ===

// Module 5154
import _mod1281 from "module_1281" /* 1281 */;
import _mod5102 from "module_5102" /* 5102 */;

let closure_2 = _mod1281("%Object.isExtensible%", true);

export default _mod1281("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5102(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5102(arg0);
});