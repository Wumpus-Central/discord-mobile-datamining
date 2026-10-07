// _runtime/metro/01452__.js
import _mod1298 from "01298__.js";
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import _mod1451 from "01451__.js";
import regexTester from "../01453_regexTester.js";

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1451();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1298) {
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
        closure_2 = tmp6 && _mod1298(tmp6);
        const tmp7 = tmp6 && _mod1298(tmp6);
      }
      return _mod1298(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
}
