// === Module 15586: ? ===

// Module 15586
import _mod15552 from "module_15552" /* 15552 */;
import _mod15573 from "module_15573" /* 15573 */;
import f2 from "f" /* 15587 */;
import _mod15597 from "module_15597" /* 15597 */;
import _mod15598 from "module_15598" /* 15598 */;

let closure_2 = _mod15552([].concat);

export default _mod15573("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod15597(arg0));
  const f = _mod15598.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});