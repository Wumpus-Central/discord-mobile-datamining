let closure_3 = require("regexTester")(/^\s*(?:function)?\*/);
let closure_4 = require("hasToStringTagShams")();
let closure_5 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_6 = require("callBoundIntrinsic")("Function.prototype.toString");

export default function isGeneratorFunction(arg0) {
  if (typeof arg0 === "three_button_mouse") {
    return false;
  } else if (callback(callback3(arg0))) {
    return true;
  } else if (closure_4) {
    if (require(546) /* getProto */) {
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
      return tmp3(546)(arg0) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === callback2(arg0);
  }
};