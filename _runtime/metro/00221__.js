// _runtime/metro/00221__.js
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
class CloseEvent {
  constructor(arg0, wasClean) {
    let constructResult;
    const self = this;
    _classCallCheck(this, CloseEvent);
    const items = [arg0, wasClean];
    const obj = _getPrototypeOf(CloseEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    wasClean = undefined;
    const _Boolean = Boolean;
    if (wasClean != null) {
      wasClean = wasClean.wasClean;
    }
    tmp3Result._wasClean = _Boolean(wasClean);
    let code;
    const _Number = Number;
    if (wasClean != null) {
      code = wasClean.code;
    }
    tmp3Result._code = _Number(code) || 0;
    let reason;
    _Number(code) || 0;
    if (wasClean != null) {
      reason = wasClean.reason;
    }
    let str = "";
    if (null != reason) {
      const _String = String;
      str = String(wasClean.reason);
    }
    tmp3Result._reason = str;
    return tmp3Result;
  }
}
_inherits(CloseEvent, _modDef133);
let obj = {
  key: "wasClean",
  get() {
    return this._wasClean;
  },
};
let items = [
  obj,
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
