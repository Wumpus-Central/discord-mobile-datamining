// === Module 14102: ? ===

// Module 14102
import _mod14068 from "module_14068" /* 14068 */;
import _mod14089 from "module_14089" /* 14089 */;
import f2 from "f" /* 14103 */;
import _mod14113 from "module_14113" /* 14113 */;
import _mod14114 from "module_14114" /* 14114 */;

let closure_2 = _mod14068([].concat);

export default _mod14089("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14113(arg0));
  const f = _mod14114.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});