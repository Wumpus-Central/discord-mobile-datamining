// _runtime/00221__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import EventDefault from "00133_Event.js";
import CloseEvent from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
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
class CloseEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = CloseEvent(this, CloseEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = closure_2;
    obj = closure_2(CloseEvent);
    tmp3 = closure_1;
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
_inheritsDefault(CloseEvent, EventDefault);
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