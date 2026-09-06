// === Module 152: ? ===

// Module 152
import EventDefault from "Event" /* 133 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
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
class CustomEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, CustomEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = c2;
    obj = c2(CustomEvent);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = CustomEvent;
_inherits(CustomEvent, EventDefault);
let items = [
  {
    key: "detail",
    get() {
      return this._detail;
    }
  }
];

export default _createClass(CustomEvent, items);