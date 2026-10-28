// === Module 6490: ? ===

// Module 6490
import _mod1304 from "module_1304" /* 1304 */;
import _mod6438 from "module_6438" /* 6438 */;

let closure_2 = _mod1304("%Object.isExtensible%", true);

export default _mod1304("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod6438(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod6438(arg0);
});