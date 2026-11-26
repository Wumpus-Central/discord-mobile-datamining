// === Module 15773: ? ===

// Module 15773
import _mod15739 from "module_15739" /* 15739 */;
import _mod15760 from "module_15760" /* 15760 */;
import f2 from "f" /* 15774 */;
import _mod15784 from "module_15784" /* 15784 */;
import _mod15785 from "module_15785" /* 15785 */;

let closure_2 = _mod15739([].concat);

export default _mod15760("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod15784(arg0));
  const f = _mod15785.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});