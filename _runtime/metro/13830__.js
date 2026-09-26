// === Module 13830: ? ===

// Module 13830
import _mod13796 from "module_13796" /* 13796 */;
import _mod13817 from "module_13817" /* 13817 */;
import f2 from "f" /* 13831 */;
import _mod13841 from "module_13841" /* 13841 */;
import _mod13842 from "module_13842" /* 13842 */;

let closure_2 = _mod13796([].concat);

export default _mod13817("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod13841(arg0));
  const f = _mod13842.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});