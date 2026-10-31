// === Module 1326: callBoundIntrinsic ===

// Module 1326 (callBoundIntrinsic)
import _mod1292 from "module_1292" /* 1292 */;
import callBindBasic from "callBindBasic" /* 1303 */;

let items = [_mod1292("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1292(arg0, arg1);
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