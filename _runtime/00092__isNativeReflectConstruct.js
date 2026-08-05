// _runtime/00092__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class RCTDeviceEventEmitterImpl {
  constructor() {
    self = this;
    tmp = outer1_2(this, RCTDeviceEventEmitterImpl);
    tmp2 = __esModule;
    obj = __esModule(RCTDeviceEventEmitterImpl);
    tmp3 = __esModule;
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
require("_inherits")(RCTDeviceEventEmitterImpl, require("EventEmitter"));
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
          const tmpResult = _get(_getPrototypeOf(prototype), "emit", arg2);
          let closure_1 = tmpResult;
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if (typeof tmpResult === "function") {
              fn = (arg0) => tmpResult.apply(closure_0, arg0);
            }
          }
          return fn;
        })(closure_0, "emit", this, 3)(items);
        const tmp9 = (function _superPropGet(closure_0, emit, arg2, arg3) {
          closure_0 = arg2;
          let prototype = closure_0;
          if (1) {
            prototype = closure_0.prototype;
          }
          const tmpResult = _get(_getPrototypeOf(prototype), "emit", arg2);
          let closure_1 = tmpResult;
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if (typeof tmpResult === "function") {
              fn = (arg0) => tmpResult.apply(closure_0, arg0);
            }
          }
          return fn;
        })(closure_0, "emit", this, 3);
        RCTDeviceEventEmitterImpl(46).endEvent();
      } catch (tmp15) {
        tmp3(tmp[6]).endEvent();
        throw tmp15;
      }
    }
  }
];
const tmp5 = new importDefaultResult(RCTDeviceEventEmitterImpl, items)();
Object.defineProperty(global, "__rctDeviceEventEmitter", { configurable: true, value: tmp5 });

export default tmp5;