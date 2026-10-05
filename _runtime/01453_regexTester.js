// _runtime/01453_regexTester.js
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";

const require = globalThis.__r;
let _require;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  if (require("metro/01454__.js")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new tmp(1293)("`regex` must be a RegExp");
    throw tmp3;
  }
}
