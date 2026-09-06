// === Module 1446: regexTester ===

// Module 1446 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  _require = arg0;
  if (require("module_1447")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1283)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};