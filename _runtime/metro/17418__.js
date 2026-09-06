// _runtime/metro/17418__.js
import _wrapNativeSuper from "00158__wrapNativeSuper.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
class TimeoutError {
  constructor(arg0) {
    self = this;
    tmp = c2(this, TimeoutError);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(TimeoutError);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
const metroRequire = _moduleResult;
function pTimeout(arg0, arg1, arg2) {
  dependencyMap = arg1;
  closure_2 = arg2;
  const promise = new Promise((fn, arg1) => {
    dependencyMap = arg1;
    if (typeof dependencyMap === "number") {
      if (tmp >= 0) {
        if (tmp !== Infinity) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            if (typeof closure_2 !== "function") {
              const _Error = Error;
              if (closure_2 instanceof Error) {
                let tmp8 = closure_2;
              } else {
                tmp8 = _moduleResult;
                if (typeof closure_2 === "string") {
                  let combined = closure_2;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "Promise timed out after " + closure_1 + " milliseconds";
                }
                tmp8 = new tmp8(combined);
              }
              if (typeof closure_0.cancel === "function") {
                closure_0.cancel();
              }
              closure_1(tmp8);
            } else {
              try {
                closure_0(closure_2());
              } catch (tmp4) {
                closure_1(tmp4);
              }
            }
          }, tmp);
          promise(dependencyMap[6])(promise.then(fn, arg1), () => {
            clearTimeout(closure_2);
          });
          const tmp7 = promise(dependencyMap[6]);
        } else {
          fn(promise);
        }
      }
    }
    const typeError = new TypeError("Expected `milliseconds` to be a positive number");
    throw typeError;
  });
  return promise;
}
module.exports.default = pTimeout;
module.exports.TimeoutError = _moduleResult;

export default pTimeout;
