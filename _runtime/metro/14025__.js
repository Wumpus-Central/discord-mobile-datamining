// === Module 14025: ? ===

// Module 14025
import _mod13991 from "module_13991" /* 13991 */;
import _mod14012 from "module_14012" /* 14012 */;
import f2 from "f" /* 14026 */;
import _mod14036 from "module_14036" /* 14036 */;
import _mod14037 from "module_14037" /* 14037 */;

let closure_2 = _mod13991([].concat);

export default _mod14012("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14036(arg0));
  const f = _mod14037.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});