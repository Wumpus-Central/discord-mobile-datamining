// === Module 15722: ? ===

// Module 15722
import _mod15688 from "module_15688" /* 15688 */;
import _mod15709 from "module_15709" /* 15709 */;
import f2 from "f" /* 15723 */;
import _mod15733 from "module_15733" /* 15733 */;
import _mod15734 from "module_15734" /* 15734 */;

let closure_2 = _mod15688([].concat);

export default _mod15709("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod15733(arg0));
  const f = _mod15734.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});