// _runtime/00248__isNativeReflectConstruct.js
import HardwareBackPressEvent from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
class HardwareBackPressEvent {
  constructor(arg0) {
    self = this;
    tmp = HardwareBackPressEvent(this, HardwareBackPressEvent);
    items = ["hardwareBackPress"];
    items[1] = global;
    tmp2 = __esModule;
    obj = __esModule(HardwareBackPressEvent);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return tmp3(self, constructResult);
  }
}
require("_inherits")(HardwareBackPressEvent, require("Event"));

export const HardwareBackPressEvent = importDefaultResult(HardwareBackPressEvent);