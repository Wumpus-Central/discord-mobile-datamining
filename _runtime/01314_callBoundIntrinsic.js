// === Module 1314: callBoundIntrinsic ===

// Module 1314 (callBoundIntrinsic)
import _mod1280 from "module_1280" /* 1280 */;
import callBindBasic from "callBindBasic" /* 1291 */;

let items = [_mod1280("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1280(arg0, arg1);
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