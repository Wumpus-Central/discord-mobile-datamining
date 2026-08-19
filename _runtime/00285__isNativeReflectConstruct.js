// _runtime/00285__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "00286__isNativeReflectConstruct.js";
import ResponderEvent from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

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
class ResponderEvent {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    tmp = ResponderEvent(this, ResponderEvent);
    items = [, , , ];
    items[0] = global;
    items[1] = arg1;
    items[2] = importDefault;
    items[3] = importAll;
    tmp2 = closure_2;
    obj = closure_2(ResponderEvent);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._touchHistory = module;
    return tmp3Result;
  }
}
_inheritsDefault(ResponderEvent, _isNativeReflectConstructDefault);
let items = [
  {
    key: "touchHistory",
    get() {
      return this._touchHistory;
    }
  }
];

export default importDefaultResult(ResponderEvent, items);