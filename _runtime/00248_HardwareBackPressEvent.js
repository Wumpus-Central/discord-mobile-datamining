// === Module 248: HardwareBackPressEvent ===

// Module 248 (HardwareBackPressEvent)
import _modDef133 from "module_133" /* 133 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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