// === Module 248: ? ===

// Module 248
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import EventDefault from "Event" /* 133 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
_possibleConstructorReturnDefault;
class HardwareBackPressEvent {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, HardwareBackPressEvent);
    items = ["hardwareBackPress"];
    items[1] = global;
    tmp2 = c2;
    obj = c2(HardwareBackPressEvent);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return tmp3(self, constructResult);
  }
}
_classCallCheck = HardwareBackPressEvent;
_inherits(HardwareBackPressEvent, EventDefault);

export const HardwareBackPressEvent = _createClass(HardwareBackPressEvent);