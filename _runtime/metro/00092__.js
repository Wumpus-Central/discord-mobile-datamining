// _runtime/metro/00092__.js
import EventEmitterDefault from "../00089_EventEmitter.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

let RCTDeviceEventEmitterImpl = arg1;
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
    tmp = c2(this, RCTDeviceEventEmitterImpl);
    tmp2 = closure_4;
    obj = closure_4(RCTDeviceEventEmitterImpl);
    tmp3 = closure_3;
    if (metroRequire()) {
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
_inherits(RCTDeviceEventEmitterImpl, EventEmitterDefault);
const entry = {
  key: "emit",
  value: function emit(arg0) {
    RCTDeviceEventEmitterImpl = arg0;
    const substr = [...arguments].slice();
    RCTDeviceEventEmitterImpl(46).beginEvent(() => "RCTDeviceEventEmitter.emit#" + closure_0);
    try {
      const self = this;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      !(function _superPropGet(RCTDeviceEventEmitterImpl, emit, arg2, arg3) {
        closure_0 = arg2;
        let prototype = RCTDeviceEventEmitterImpl;
        if (1) {
          prototype = RCTDeviceEventEmitterImpl.prototype;
        }
        const tmpResult = _get(_getPrototypeOf(prototype), "emit", arg2);
        closure_1 = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if (typeof tmpResult === "function") {
            fn = (arg0) => closure_1.apply(closure_0, arg0);
          }
        }
        return fn;
      })(
        RCTDeviceEventEmitterImpl,
        "emit",
        this,
        3,
      )(items);
      const tmp9 = (function _superPropGet(RCTDeviceEventEmitterImpl, emit, arg2, arg3) {
        closure_0 = arg2;
        let prototype = RCTDeviceEventEmitterImpl;
        if (1) {
          prototype = RCTDeviceEventEmitterImpl.prototype;
        }
        const tmpResult = _get(_getPrototypeOf(prototype), "emit", arg2);
        closure_1 = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if (typeof tmpResult === "function") {
            fn = (arg0) => closure_1.apply(closure_0, arg0);
          }
        }
        return fn;
      })(RCTDeviceEventEmitterImpl, "emit", this, 3);
      RCTDeviceEventEmitterImpl(46).endEvent();
    } catch (tmp15) {
      tmp3(tmp[6]).endEvent();
      throw tmp15;
    }
  },
};
let items = [entry];
const tmp5 = new _createClass(RCTDeviceEventEmitterImpl, items)();
Object.defineProperty(global, "__rctDeviceEventEmitter", { configurable: true, value: tmp5 });

export default tmp5;
