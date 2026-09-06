// _runtime/metro/00152__.js
import EventDefault from "../00133_Event.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
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
class CustomEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, CustomEvent);
    items = [,];
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
    },
  },
];

export default _createClass(CustomEvent, items);
