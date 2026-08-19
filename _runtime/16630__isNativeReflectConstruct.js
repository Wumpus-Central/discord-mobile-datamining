// === Module 16630: _isNativeReflectConstruct ===

// Module 16630 (_isNativeReflectConstruct)
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  return new Promise((fn) => {
    const table = arg1;
    if (typeof table === "number") {
      if (tmp >= 0) {
        if (tmp !== Infinity) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            if (typeof callback !== "function") {
              const _Error = Error;
              if (callback instanceof Error) {
                let tmp8 = callback;
              } else {
                tmp8 = closure_2_6;
                if (typeof callback === "string") {
                  let combined = callback;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "Promise timed out after " + callback + " milliseconds";
                }
                tmp8 = new tmp8(combined);
              }
              if (typeof lib.cancel === "function") {
                lib.cancel();
              }
              callback(tmp8);
            } else {
              try {
                lib(callback());
              } catch (tmp4) {
                callback(tmp4);
              }
            }
          }, tmp);
          promise(table[6])(promise.then(fn, arg1), () => {
            clearTimeout(closure_2);
          });
          const tmp7 = promise(table[6]);
        } else {
          fn(promise);
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