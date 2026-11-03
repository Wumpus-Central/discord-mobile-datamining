// _runtime/01462_regexTester.js
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";

const require = globalThis.__r;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  _require = arg0;
  if (require("metro/01463__.js")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1293)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
}
