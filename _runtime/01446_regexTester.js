// _runtime/01446_regexTester.js
import callBoundIntrinsic from "01316_callBoundIntrinsic.js";
import { isRegex } from "01447_isRegex.js";

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (isRegex(arg0)) {
    return function test(arg0) {
      return null !== closure_1_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1283)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
}
