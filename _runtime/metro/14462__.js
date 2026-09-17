// === Module 14462: ? ===

// Module 14462
import _mod14428 from "module_14428" /* 14428 */;
import _mod14449 from "module_14449" /* 14449 */;
import f2 from "f" /* 14463 */;
import _mod14473 from "module_14473" /* 14473 */;
import _mod14474 from "module_14474" /* 14474 */;

let closure_2 = _mod14428([].concat);

export default _mod14449("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14473(arg0));
  const f = _mod14474.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});