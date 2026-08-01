// === Module 220: _isNativeReflectConstruct ===

// Module 220 (_isNativeReflectConstruct)
import MessageEvent from "_classCallCheck";
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
class MessageEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = MessageEvent(this, MessageEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = __esModule;
    obj = __esModule(MessageEvent);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    data = undefined;
    if (arg1 != null) {
      data = arg1.data;
    }
    tmp3Result._data = data;
    str = undefined;
    if (arg1 != null) {
      str = arg1.origin;
    }
    if (str == null) {
      str = "";
    }
    tmp3Result._origin = String(str);
    str2 = undefined;
    if (arg1 != null) {
      str2 = arg1.lastEventId;
    }
    if (str2 == null) {
      str2 = "";
    }
    tmp3Result._lastEventId = String(str2);
    return tmp3Result;
  }
}
require("_inherits")(MessageEvent, require("Event"));
let items = [
  {
    key: "data",
    get() {
      return this._data;
    }
  },
  {
    key: "origin",
    get() {
      return this._origin;
    }
  },
  {
    key: "lastEventId",
    get() {
      return this._lastEventId;
    }
  }
];

export default importDefaultResult(MessageEvent, items);