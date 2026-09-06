// === Module 14338: ? ===

// Module 14338
import call from "call" /* 14304 */;
import all from "all" /* 14325 */;
import f2 from "f" /* 14339 */;
import all2 from "all" /* 14349 */;
import _mod14350 from "module_14350" /* 14350 */;

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod14350.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});