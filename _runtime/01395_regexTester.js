// _runtime/01395_regexTester.js
let closure_2 = require("callBoundIntrinsic")("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (_require("01396_isRegex.js")(arg0)) {
    return function test(arg0) {
      return null !== outer1_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(541)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};