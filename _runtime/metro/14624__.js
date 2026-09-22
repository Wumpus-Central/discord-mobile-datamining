// === Module 14624: ? ===

// Module 14624
import _mod14590 from "module_14590" /* 14590 */;
import _mod14611 from "module_14611" /* 14611 */;
import f2 from "f" /* 14625 */;
import _mod14635 from "module_14635" /* 14635 */;
import _mod14636 from "module_14636" /* 14636 */;

let closure_2 = _mod14590([].concat);

export default _mod14611("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14635(arg0));
  const f = _mod14636.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});