// === Module 6521: ? ===

// Module 6521
import _mod1293 from "module_1293" /* 1293 */;
import _mod6469 from "module_6469" /* 6469 */;

let closure_2 = _mod1293("%Object.isExtensible%", true);

export default _mod1293("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod6469(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod6469(arg0);
});