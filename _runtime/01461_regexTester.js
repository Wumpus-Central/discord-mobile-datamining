// === Module 1461: regexTester ===

// Module 1461 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;

const require = globalThis.__r;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  _require = arg0;
  if (require("module_1462")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1294)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};