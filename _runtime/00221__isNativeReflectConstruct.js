import CloseEvent from "_classCallCheck";
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
class CloseEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = CloseEvent(this, CloseEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = __esModule;
    obj = __esModule(CloseEvent);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    wasClean = undefined;
    if (arg1 != null) {
      wasClean = arg1.wasClean;
    }
    tmp3Result._wasClean = Boolean(wasClean);
    code = undefined;
    if (arg1 != null) {
      code = arg1.code;
    }
    tmp9 = Number(code) || 0;
    tmp3Result._code = tmp9;
    reason = undefined;
    if (arg1 != null) {
      reason = arg1.reason;
    }
    str = "";
    if (null != reason) {
      _String = String;
      str = String(arg1.reason);
    }
    tmp3Result._reason = str;
    return tmp3Result;
  }
}
require("_inherits")(CloseEvent, require("Event"));
let items = [
  {
    key: "wasClean",
    get() {
      return this._wasClean;
    }
  },
  {
    key: "code",
    get() {
      return this._code;
    }
  },
  {
    key: "reason",
    get() {
      return this._reason;
    }
  }
];

export default importDefaultResult(CloseEvent, items);