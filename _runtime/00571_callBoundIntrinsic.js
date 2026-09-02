// _runtime/00571_callBoundIntrinsic.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import callBindBasic from "00548_callBindBasic.js";

let items = [getEvalledConstructor("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0) {
  const tmp3 = getEvalledConstructor(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (callback(arg0, ".prototype.") > -1) {
      const items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
}
