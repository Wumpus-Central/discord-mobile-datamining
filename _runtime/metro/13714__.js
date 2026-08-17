// _runtime/metro/13714__.js
import call from "call" /* 13680 */;
import all from "all" /* 13701 */;
import f2 from "f" /* 13715 */;
import all2 from "all" /* 13725 */;
import _mod13726 from "module_13726" /* 13726 */;

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13726.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});