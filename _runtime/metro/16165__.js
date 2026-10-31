// === Module 16165: ? ===

// Module 16165
import _mod16131 from "module_16131" /* 16131 */;
import _mod16152 from "module_16152" /* 16152 */;
import f2 from "f" /* 16166 */;
import _mod16176 from "module_16176" /* 16176 */;
import _mod16177 from "module_16177" /* 16177 */;

let closure_2 = _mod16131([].concat);

export default _mod16152("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod16176(arg0));
  const f = _mod16177.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});