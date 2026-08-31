// === Module 1409: isGeneratorFunction ===

// Module 1409 (isGeneratorFunction)
import getProto from "getProto" /* 546 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 574 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1408 */;
import regexTester from "regexTester" /* 1410 */;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = hasToStringTagShams();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (callback(callback3(fn))) {
    return true;
  } else if (closure_4) {
    if (getProto) {
      if (undefined === closure_2) {
        const tmp6 = (() => {
          if (closure_4) {
            try {
              const _Function = Function;
              return Function("return function*() {}")();
            } catch (err) {
            }
          } else {
            return false;
          }
        })();
        closure_2 = tmp6 && tmp3(546)(tmp6);
        const tmp7 = tmp6 && tmp3(546)(tmp6);
      }
      return tmp3(546)(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === callback2(fn);
  }
};