// _runtime/00285__isNativeReflectConstruct.js
import ResponderEvent from "_classCallCheck";
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
class ResponderEvent {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    tmp = ResponderEvent(this, ResponderEvent);
    items = [, , , ];
    items[0] = global;
    items[1] = arg1;
    items[2] = importDefault;
    items[3] = importAll;
    tmp2 = __esModule;
    obj = __esModule(ResponderEvent);
    tmp3 = __esModule;
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
require("_inherits")(ResponderEvent, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "touchHistory",
    get() {
      return this._touchHistory;
    }
  }
];

export default importDefaultResult(ResponderEvent, items);