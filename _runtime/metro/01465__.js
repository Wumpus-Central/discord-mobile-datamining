// _runtime/metro/01465__.js
import _mod1311 from "01311__.js";
import callBoundIntrinsic from "../01339_callBoundIntrinsic.js";
import _mod1464 from "01464__.js";
import regexTester from "../01466_regexTester.js";

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1464();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1311) {
      if (undefined === closure_2) {
        const tmp6 = (() => {
          if (closure_1_4) {
            try {
              const _Function = Function;
              return Function("return function*() {}")();
            } catch (err) {}
          } else {
            return false;
          }
        })();
        closure_2 = tmp6 && _mod1311(tmp6);
        const tmp7 = tmp6 && _mod1311(tmp6);
      }
      return _mod1311(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
}
