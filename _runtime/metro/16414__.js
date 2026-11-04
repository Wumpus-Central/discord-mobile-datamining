// === Module 16414: ? ===

// Module 16414
import _mod16380 from "module_16380" /* 16380 */;
import _mod16401 from "module_16401" /* 16401 */;
import f2 from "f" /* 16415 */;
import _mod16425 from "module_16425" /* 16425 */;
import _mod16426 from "module_16426" /* 16426 */;

let closure_2 = _mod16380([].concat);

export default _mod16401("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod16425(arg0));
  const f = _mod16426.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});