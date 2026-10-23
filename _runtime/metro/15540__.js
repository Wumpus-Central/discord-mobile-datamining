// === Module 15540: ? ===

// Module 15540
import _mod15506 from "module_15506" /* 15506 */;
import _mod15527 from "module_15527" /* 15527 */;
import f2 from "f" /* 15541 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15552 from "module_15552" /* 15552 */;

let closure_2 = _mod15506([].concat);

export default _mod15527("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod15551(arg0));
  const f = _mod15552.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});