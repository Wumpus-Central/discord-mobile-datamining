// _runtime/01408_isGeneratorFunction.js
import getProto from "00543_getProto.js";
import callBoundIntrinsic from "00571_callBoundIntrinsic.js";
import hasToStringTagShams from "01407_hasToStringTagShams.js";
import regexTester from "01409_regexTester.js";

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
            } catch (err) {}
          } else {
            return false;
          }
        })();
        closure_2 = tmp6 && tmp3(543)(tmp6);
        const tmp7 = tmp6 && tmp3(543)(tmp6);
      }
      return tmp3(543)(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === callback2(fn);
  }
}
