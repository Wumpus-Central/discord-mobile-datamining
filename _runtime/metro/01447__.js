// === Module 1447: ? ===

// Module 1447
import _mod1287 from "module_1287" /* 1287 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import _mod1446 from "module_1446" /* 1446 */;
import regexTester from "regexTester" /* 1448 */;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1446();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1287) {
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
        closure_2 = tmp6 && _mod1287(tmp6);
        const tmp7 = tmp6 && _mod1287(tmp6);
      }
      return _mod1287(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
};