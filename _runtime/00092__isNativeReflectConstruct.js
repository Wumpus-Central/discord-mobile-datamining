// _runtime/00092__isNativeReflectConstruct.js
import EventEmitterDefault from "00089_EventEmitter.js";
import _inheritsDefault from "00098__inherits.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import closure_5 from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";

const RCTDeviceEventEmitterImpl = arg1;
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
class RCTDeviceEventEmitterImpl {
  constructor() {
    self = this;
    tmp = closure_2(this, RCTDeviceEventEmitterImpl);
    tmp2 = closure_4;
    obj = closure_4(RCTDeviceEventEmitterImpl);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inheritsDefault(RCTDeviceEventEmitterImpl, EventEmitterDefault);
let items = [
  {
    key: "emit",
    value: function emit(closure_0) {
      const substr = [...arguments].slice();
      RCTDeviceEventEmitterImpl(46).beginEvent(() => "RCTDeviceEventEmitter.emit#" + closure_0);
      try {
        const self = this;
        const items = [closure_0];
        HermesBuiltin.arraySpread(substr, 1);
        !(function _superPropGet(closure_0, emit, arg2, arg3) {
          closure_0 = arg2;
          let prototype = closure_0;
          if (1) {
            prototype = closure_0.prototype;
          }
          const tmpResult = closure_5(closure_4(prototype), "emit", arg2);
          closure_1 = tmpResult;
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if (typeof tmpResult === "function") {
              fn = (arg0) => callback.apply(closure_0, arg0);
            }
          }
          return fn;
        })(
          closure_0,
          "emit",
          this,
          3,
        )(items);
        const tmp9 = (function _superPropGet(closure_0, emit, arg2, arg3) {
          closure_0 = arg2;
          let prototype = closure_0;
          if (1) {
            prototype = closure_0.prototype;
          }
          const tmpResult = closure_5(closure_4(prototype), "emit", arg2);
          closure_1 = tmpResult;
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if (typeof tmpResult === "function") {
              fn = (arg0) => callback.apply(closure_0, arg0);
            }
          }
          return fn;
        })(closure_0, "emit", this, 3);
        RCTDeviceEventEmitterImpl(46).endEvent();
      } catch (tmp15) {
        tmp3(tmp[6]).endEvent();
        throw tmp15;
      }
    },
  },
];
const tmp5 = new importDefaultResult(RCTDeviceEventEmitterImpl, items)();
Object.defineProperty(global, "__rctDeviceEventEmitter", { configurable: true, value: tmp5 });

export default tmp5;
