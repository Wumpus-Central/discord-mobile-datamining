// _runtime/00248_HardwareBackPressEvent.js
import _modDef133 from "metro/00133__.js";
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import map from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class HardwareBackPressEvent {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, HardwareBackPressEvent);
    const items = ["hardwareBackPress", arg0];
    const obj = _getPrototypeOf(HardwareBackPressEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return map(self, constructResult);
  }
}
_inherits(HardwareBackPressEvent, _modDef133);
const HardwareBackPressEvent_export = _createClass(HardwareBackPressEvent);

export { HardwareBackPressEvent_export as HardwareBackPressEvent };
