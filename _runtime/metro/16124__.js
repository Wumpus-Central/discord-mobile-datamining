// === Module 16124: ? ===

// Module 16124
import _mod16090 from "module_16090" /* 16090 */;
import _mod16111 from "module_16111" /* 16111 */;
import f2 from "f" /* 16125 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16136 from "module_16136" /* 16136 */;

let closure_2 = _mod16090([].concat);

export default _mod16111("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod16135(arg0));
  const f = _mod16136.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});