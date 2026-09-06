// === Module 4874: ? ===

// Module 4874
import _mod1282 from "module_1282" /* 1282 */;
import _mod4822 from "module_4822" /* 4822 */;

let closure_2 = _mod1282("%Object.isExtensible%", true);

export default _mod1282("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod4822(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod4822(arg0);
});