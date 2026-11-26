// === Module 1329: callBoundIntrinsic ===

// Module 1329 (callBoundIntrinsic)
import _mod1295 from "module_1295" /* 1295 */;
import callBindBasic from "callBindBasic" /* 1306 */;

let items = [_mod1295("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1295(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (closure_2(arg0, ".prototype.") > -1) {
      items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
};