// === Module 4919: ? ===

// Module 4919
import _mod1282 from "module_1282" /* 1282 */;
import _mod4867 from "module_4867" /* 4867 */;

let closure_2 = _mod1282("%Object.isExtensible%", true);

export default _mod1282("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod4867(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod4867(arg0);
});