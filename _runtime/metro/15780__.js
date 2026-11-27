// === Module 15780: ? ===

// Module 15780
import _mod15746 from "module_15746" /* 15746 */;
import _mod15767 from "module_15767" /* 15767 */;
import f2 from "f" /* 15781 */;
import _mod15791 from "module_15791" /* 15791 */;
import _mod15792 from "module_15792" /* 15792 */;

let closure_2 = _mod15746([].concat);

export default _mod15767("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod15791(arg0));
  const f = _mod15792.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});