// === Module 1467: ? ===

// Module 1467
import _mod1313 from "module_1313" /* 1313 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import _mod1466 from "module_1466" /* 1466 */;
import regexTester from "regexTester" /* 1468 */;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1466();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1313) {
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
        closure_2 = tmp6 && _mod1313(tmp6);
        const tmp7 = tmp6 && _mod1313(tmp6);
      }
      return _mod1313(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
};