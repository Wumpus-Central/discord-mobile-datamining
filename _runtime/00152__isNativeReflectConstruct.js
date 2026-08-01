// === Module 152: _isNativeReflectConstruct ===

// Module 152 (_isNativeReflectConstruct)
import CustomEvent from "_classCallCheck";
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
class CustomEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = CustomEvent(this, CustomEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = __esModule;
    obj = __esModule(CustomEvent);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    detail = undefined;
    if (arg1 != null) {
      detail = arg1.detail;
    }
    tmp3Result._detail = detail;
    return tmp3Result;
  }
}
require("_inherits")(CustomEvent, require("Event"));
let items = [
  {
    key: "detail",
    get() {
      return this._detail;
    }
  }
];

export default importDefaultResult(CustomEvent, items);