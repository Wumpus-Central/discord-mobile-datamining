// _runtime/16343__isNativeReflectConstruct.js
import _createClass from "_createClass";
import _classCallCheck from "_classCallCheck";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class TimeoutError {
  constructor(arg0) {
    self = this;
    tmp = outer1_2(this, TimeoutError);
    items = [];
    items[0] = global;
    tmp2 = outer1_4;
    obj = outer1_4(TimeoutError);
    tmp3 = outer1_3;
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
_inherits(TimeoutError, require("_wrapNativeSuper")(Error));
const _moduleResult = _createClass(TimeoutError);
function pTimeout(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
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
                tmp8 = outer2_6;
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