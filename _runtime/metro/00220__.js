// _runtime/metro/00220__.js
import _modDef133 from "00133__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class MessageEvent {
  constructor(arg0, data) {
    let constructResult;
    const self = this;
    _classCallCheck(this, MessageEvent);
    const items = [arg0, data];
    const obj = _getPrototypeOf(MessageEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    data = undefined;
    if (data != null) {
      data = data.data;
    }
    tmp3Result._data = data;
    let str;
    const _String = String;
    if (data != null) {
      str = data.origin;
    }
    if (str == null) {
      str = "";
    }
    tmp3Result._origin = _String(str);
    let str2;
    const _String2 = String;
    if (data != null) {
      str2 = data.lastEventId;
    }
    if (str2 == null) {
      str2 = "";
    }
    tmp3Result._lastEventId = _String2(str2);
    return tmp3Result;
  }
}
_inherits(MessageEvent, _modDef133);
let obj = {
  key: "data",
  get() {
    return this._data;
  },
};
let items = [
  obj,
  {
    key: "origin",
    get() {
      return this._origin;
    },
  },
  {
    key: "lastEventId",
    get() {
      return this._lastEventId;
    },
  },
];

export default _createClass(MessageEvent, items);
