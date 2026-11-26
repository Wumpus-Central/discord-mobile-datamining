// _runtime/01329_callBoundIntrinsic.js
import _mod1295 from "metro/01295__.js";
import callBindBasic from "01306_callBindBasic.js";

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
}
