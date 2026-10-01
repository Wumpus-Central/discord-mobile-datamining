// === Module 14033: ? ===

// Module 14033
import _mod13999 from "module_13999" /* 13999 */;
import _mod14020 from "module_14020" /* 14020 */;
import f2 from "f" /* 14034 */;
import _mod14044 from "module_14044" /* 14044 */;
import _mod14045 from "module_14045" /* 14045 */;

let closure_2 = _mod13999([].concat);

export default _mod14020("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14044(arg0));
  const f = _mod14045.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});