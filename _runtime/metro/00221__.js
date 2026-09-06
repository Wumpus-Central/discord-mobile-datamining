// _runtime/metro/00221__.js
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
class CloseEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, CloseEvent);
    items = [,];
    items[0] = global;
    items[1] = arg1;
    tmp2 = c2;
    obj = c2(CloseEvent);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = CloseEvent;
_inherits(CloseEvent, EventDefault);
let items = [
  {
    key: "wasClean",
    get() {
      return this._wasClean;
    },
  },
  {
    key: "code",
    get() {
      return this._code;
    },
  },
  {
    key: "reason",
    get() {
      return this._reason;
    },
  },
];

export default _createClass(CloseEvent, items);
