// === Module 13874: ? ===

// Module 13874
import _mod13840 from "module_13840" /* 13840 */;
import _mod13861 from "module_13861" /* 13861 */;
import f2 from "f" /* 13875 */;
import _mod13885 from "module_13885" /* 13885 */;
import _mod13886 from "module_13886" /* 13886 */;

let closure_2 = _mod13840([].concat);

export default _mod13861("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod13885(arg0));
  const f = _mod13886.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});