import { getEvalledConstructor } from "00540_getEvalledConstructor.js";
import { callBindBasic } from "00551_callBindBasic.js";
// _runtime/00574_callBoundIntrinsic.js
import callBindBasic from "callBindBasic";

let items = [require("getEvalledConstructor")("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0) {
  const tmp3 = getEvalledConstructor /* getEvalledConstructor */(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (callback(arg0, ".prototype.") > -1) {
      const items = [tmp3];
      tmp4 = callBindBasic /* callBindBasic */(items);
    }
  }
  return tmp4;
};