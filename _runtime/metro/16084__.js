// === Module 16084: ? ===

// Module 16084
import _mod16050 from "module_16050" /* 16050 */;
import _mod16071 from "module_16071" /* 16071 */;
import f2 from "f" /* 16085 */;
import _mod16095 from "module_16095" /* 16095 */;
import _mod16096 from "module_16096" /* 16096 */;

let closure_2 = _mod16050([].concat);

export default _mod16071("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod16095(arg0));
  const f = _mod16096.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});