// === Module 285: ? ===

// Module 285
import _modDef286 from "module_286" /* 286 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
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
class ResponderEvent {
  constructor(arg0, arg1, arg2, arg3, _touchHistory) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ResponderEvent);
    const items = [arg0, arg1, arg2, arg3];
    const obj = _getPrototypeOf(ResponderEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result._touchHistory = _touchHistory;
    return tmp3Result;
  }
}
_inherits(ResponderEvent, _modDef286);
let obj = {
  key: "touchHistory",
  get() {
    return this._touchHistory;
  }
};
let items = [obj];

export default _createClass(ResponderEvent, items);