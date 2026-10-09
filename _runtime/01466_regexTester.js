// _runtime/01466_regexTester.js
import callBoundIntrinsic from "01339_callBoundIntrinsic.js";

const require = globalThis.__r;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  _require = arg0;
  if (require("metro/01467__.js")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1306)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
}
