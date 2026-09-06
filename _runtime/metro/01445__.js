// === Module 1445: ? ===

// Module 1445
import _mod1288 from "module_1288" /* 1288 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import _mod1444 from "module_1444" /* 1444 */;
import regexTester from "regexTester" /* 1446 */;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1444();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1288) {
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
        closure_2 = tmp6 && tmp3(1288)(tmp6);
        const tmp7 = tmp6 && tmp3(1288)(tmp6);
      }
      return tmp3(1288)(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
};