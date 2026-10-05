// === Module 92: ? ===

// Module 92
import _mod46 from "module_46" /* 46 */;
import _modDef89 from "module_89" /* 89 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
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
class RCTDeviceEventEmitterImpl {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RCTDeviceEventEmitterImpl);
    const obj = _getPrototypeOf(RCTDeviceEventEmitterImpl);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RCTDeviceEventEmitterImpl, _modDef89);
const entry = {
  key: "emit",
  value: function emit(arg0) {
    function _superPropGet(RCTDeviceEventEmitterImpl, emit, arg2, arg3) {
      let closure_0 = arg2;
      let prototype = RCTDeviceEventEmitterImpl;
      if (1) {
        prototype = RCTDeviceEventEmitterImpl.prototype;
      }
      const tmpResult = closure_1_5(closure_1_4(prototype), "emit", arg2);
      let closure_1 = tmpResult;
      let fn = tmpResult;
      if (2) {
        fn = tmpResult;
        if (typeof tmpResult === "function") {
          fn = (arg0) => closure_1.apply(closure_0, arg0);
        }
      }
      return fn;
    }
    let closure_0 = arg0;
    const substr = [...arguments].slice();
    const obj = _mod46;
    obj.beginEvent(() => "RCTDeviceEventEmitter.emit#" + closure_0);
    try {
      const self = this;
      const items = [arg0];
      const tmp6 = _superPropGet(RCTDeviceEventEmitterImpl, "emit", this, 3);
      HermesBuiltin.arraySpread(items, substr, 1);
      !tmp6(items);
      const tmp2Result = _mod46;
      tmp2Result.endEvent();
    } catch (tmp12) {
      const tmp2Result2 = _mod46;
      tmp2Result2.endEvent();
      throw tmp12;
    }
  }
};
let items = [entry];
const tmp5 = new _createClass(RCTDeviceEventEmitterImpl, items)();
Object.defineProperty(global, "__rctDeviceEventEmitter", { configurable: true, value: tmp5 });

export default tmp5;