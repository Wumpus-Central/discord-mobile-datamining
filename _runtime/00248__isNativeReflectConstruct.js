// _runtime/00248__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import EventDefault from "00133_Event.js";
import HardwareBackPressEvent from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

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
