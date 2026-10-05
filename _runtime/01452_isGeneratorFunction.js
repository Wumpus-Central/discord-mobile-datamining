// === Module 1452: isGeneratorFunction ===

// Module 1452 (isGeneratorFunction)
import _mod1298 from "module_1298" /* 1298 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1451 */;
import regexTester from "regexTester" /* 1453 */;

let closure_2;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = hasToStringTagShams();
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
            } catch (err) {
            }
          } else {
            return false;
          }
        })();
        closure_2 = tmp6 && _mod1298(tmp6);
        tmp6 && _mod1298(tmp6);
      }
      return _mod1298(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
};