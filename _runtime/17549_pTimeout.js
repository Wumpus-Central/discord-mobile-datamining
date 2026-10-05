// === Module 17549: pTimeout ===

// Module 17549 (pTimeout)
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class TimeoutError {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, TimeoutError);
    const items = [arg0];
    const obj = _getPrototypeOf(TimeoutError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.name = "TimeoutError";
    return tmp3Result;
  }
}
_inherits(TimeoutError, _wrapNativeSuper(Error));
const _moduleResult = _createClass(TimeoutError);
const metroRequire = _moduleResult;
function pTimeout(arg0, arg1, arg2) {
  let closure_1 = arg1;
  let closure_2 = arg2;
  let promise = new Promise((fn, arg1) => {
    promise = fn;
    closure_1 = arg1;
    if (typeof closure_1 === "number") {
      if (closure_1 >= 0) {
        if (closure_1 !== Infinity) {
          const tmp4 = globalThis;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(function() {
            if (typeof closure_2 !== "function") {
              let tmp82;
              const _Error = Error;
              if (closure_2 instanceof Error) {
                tmp82 = closure_2;
              } else {
                let combined;
                if (typeof closure_2 === "string") {
                  combined = closure_2;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "Promise timed out after " + closure_1 + " milliseconds";
                }
                const self = this;
                const self2 = this;
                tmp82 = new metroRequire(combined);
              }
              if (typeof promise.cancel === "function") {
                promise.cancel();
              }
              closure_1(tmp82);
            } else {
              try {
                promise(closure_2());
              } catch (tmp4) {
                closure_1(tmp4);
              }
            }
          }, tmp);
          const tmp7 = promise(closure_1[6]);
          tmp7(promise.then(fn, arg1), () => {
            clearTimeout(closure_2);
          });
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