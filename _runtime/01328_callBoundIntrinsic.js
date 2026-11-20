// _runtime/01328_callBoundIntrinsic.js
import _mod1294 from "metro/01294__.js";
import callBindBasic from "01305_callBindBasic.js";

let items = [_mod1294("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1294(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (closure_2(arg0, ".prototype.") > -1) {
      items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
}
