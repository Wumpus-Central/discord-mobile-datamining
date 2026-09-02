// _runtime/01409_regexTester.js
import callBoundIntrinsic from "00571_callBoundIntrinsic.js";
import { isRegex } from "01410_isRegex.js";

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (isRegex(arg0)) {
    return function test(arg0) {
      return null !== closure_1_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(538)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
}
