// === Module 1338: callBoundIntrinsic ===

// Module 1338 (callBoundIntrinsic)
import _mod1304 from "module_1304" /* 1304 */;
import callBindBasic from "callBindBasic" /* 1315 */;

let items = [_mod1304("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1304(arg0, arg1);
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