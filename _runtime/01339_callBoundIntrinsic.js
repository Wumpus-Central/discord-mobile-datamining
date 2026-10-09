// _runtime/01339_callBoundIntrinsic.js
import _mod1305 from "metro/01305__.js";
import callBindBasic from "01316_callBindBasic.js";

let items = [_mod1305("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1305(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (closure_2(arg0, ".prototype.") > -1) {
      const items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
}
