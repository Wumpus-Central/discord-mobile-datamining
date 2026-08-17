// _runtime/01414_regexTester.js
import callBoundIntrinsic from "00574_callBoundIntrinsic.js";
import { isRegex } from "01415_isRegex.js";

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (_isRegex(arg0)) {
    return function test(arg0) {
      return null !== closure_1_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(541)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};