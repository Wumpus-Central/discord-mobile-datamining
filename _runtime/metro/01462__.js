// === Module 1462: ? ===

// Module 1462
import _mod1300 from "module_1300" /* 1300 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1328 */;
import _mod1461 from "module_1461" /* 1461 */;
import regexTester from "regexTester" /* 1463 */;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1461();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1300) {
      if (undefined === closure_2) {
        const tmp6 = (() => {
          if (closure_1_4) {
            try {
              const _Function = Function;
              return Function("return function*() {}")();
            } catch (err) {
            }
          } else {
            return false;
          }
        })();
        closure_2 = tmp6 && _mod1300(tmp6);
        const tmp7 = tmp6 && _mod1300(tmp6);
      }
      return _mod1300(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
};