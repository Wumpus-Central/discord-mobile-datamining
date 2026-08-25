// _runtime/16758__isNativeReflectConstruct.js
import _wrapNativeSuper from "metro/00158__wrapNativeSuper.js";
import _createClass from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const TimeoutError = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class TimeoutError {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, TimeoutError);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(TimeoutError);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "TimeoutError";
    return tmp3Result;
  }
}
_inherits(TimeoutError, _wrapNativeSuper(Error));
const _moduleResult = _createClass(TimeoutError);
function pTimeout(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return new Promise((arg0, arg1) => {
    const table = arg1;
    if (typeof table === "number") {
      if (tmp >= 0) {
        if (tmp !== Infinity) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            if (typeof closure_2 !== "function") {
              const _Error = Error;
              if (tmp instanceof Error) {
                let tmp8 = tmp;
              } else {
                tmp8 = closure_2_6;
                if (typeof tmp === "string") {
                  let combined = tmp;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "Promise timed out after " + callback + " milliseconds";
                }
                tmp8 = new tmp8(combined);
              }
              if (typeof lib.cancel === "function") {
                obj.cancel();
              }
              callback(tmp8);
              obj = lib;
            } else {
              try {
                lib(tmp());
              } catch (tmp4) {
                callback(tmp4);
              }
            }
          }, tmp);
          promise(table[6])(promise.then(arg0, arg1), () => {
            clearTimeout(closure_2);
          });
          const tmp7 = promise(table[6]);
        } else {
          arg0(promise);
        }
      }
    }
    const typeError = new TypeError("Expected `milliseconds` to be a positive number");
    throw typeError;
  });
}
module.exports.default = pTimeout;
module.exports.TimeoutError = _moduleResult;

export default pTimeout;