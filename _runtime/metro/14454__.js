// === Module 14454: ? ===

// Module 14454
import _mod14420 from "module_14420" /* 14420 */;
import _mod14441 from "module_14441" /* 14441 */;
import f2 from "f" /* 14455 */;
import _mod14465 from "module_14465" /* 14465 */;
import _mod14466 from "module_14466" /* 14466 */;

let closure_2 = _mod14420([].concat);

export default _mod14441("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14465(arg0));
  const f = _mod14466.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});