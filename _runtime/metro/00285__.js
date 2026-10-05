// _runtime/metro/00285__.js
import _modDef286 from "00286__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  },
};
let items = [obj];

export default _createClass(ResponderEvent, items);
