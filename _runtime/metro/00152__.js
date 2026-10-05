// _runtime/metro/00152__.js
import _modDef133 from "00133__.js";
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
class CustomEvent {
  constructor(arg0, detail) {
    let constructResult;
    const self = this;
    _classCallCheck(this, CustomEvent);
    const items = [arg0, detail];
    const obj = _getPrototypeOf(CustomEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    detail = undefined;
    if (detail != null) {
      detail = detail.detail;
    }
    tmp3Result._detail = detail;
    return tmp3Result;
  }
}
_inherits(CustomEvent, _modDef133);
let obj = {
  key: "detail",
  get() {
    return this._detail;
  },
};
let items = [obj];

export default _createClass(CustomEvent, items);
