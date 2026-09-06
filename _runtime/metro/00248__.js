// _runtime/metro/00248__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import EventDefault from "../00133_Event.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
