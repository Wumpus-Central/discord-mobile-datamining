// === Module 1341: callBoundIntrinsic ===

// Module 1341 (callBoundIntrinsic)
import _mod1307 from "module_1307" /* 1307 */;
import callBindBasic from "callBindBasic" /* 1318 */;

let items = [_mod1307("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1307(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (closure_2(arg0, ".prototype.") > -1) {
      const items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
};