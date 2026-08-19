// === Module 152: _isNativeReflectConstruct ===

// Module 152 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import EventDefault from "Event" /* 133 */;
import CustomEvent from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
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
class CustomEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = CustomEvent(this, CustomEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = closure_2;
    obj = closure_2(CustomEvent);
    tmp3 = closure_1;
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
_inheritsDefault(CustomEvent, EventDefault);
let items = [
  {
    key: "detail",
    get() {
      return this._detail;
    }
  }
];

export default importDefaultResult(CustomEvent, items);