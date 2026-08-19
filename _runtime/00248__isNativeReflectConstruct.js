// === Module 248: _isNativeReflectConstruct ===

// Module 248 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import EventDefault from "Event" /* 133 */;
import HardwareBackPressEvent from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

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
class HardwareBackPressEvent {
  constructor(arg0) {
    self = this;
    tmp = HardwareBackPressEvent(this, HardwareBackPressEvent);
    items = ["hardwareBackPress"];
    items[1] = global;
    tmp2 = closure_2;
    obj = closure_2(HardwareBackPressEvent);
    tmp3 = closure_1;
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
_inheritsDefault(HardwareBackPressEvent, EventDefault);

export const HardwareBackPressEvent = importDefaultResult(HardwareBackPressEvent);