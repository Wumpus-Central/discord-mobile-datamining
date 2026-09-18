// === Module 14557: ? ===

// Module 14557
import _mod14523 from "module_14523" /* 14523 */;
import _mod14544 from "module_14544" /* 14544 */;
import f2 from "f" /* 14558 */;
import _mod14568 from "module_14568" /* 14568 */;
import _mod14569 from "module_14569" /* 14569 */;

let closure_2 = _mod14523([].concat);

export default _mod14544("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14568(arg0));
  const f = _mod14569.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});