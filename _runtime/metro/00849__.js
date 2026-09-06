// _runtime/metro/00849__.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _wrapNativeSuper from "00158__wrapNativeSuper.js";

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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class SentryError {
  constructor(arg0) {
    str = require;
    if (require === undefined) {
      str = "warn";
    }
    self = this;
    tmp = closure_0(this, SentryError);
    items = [];
    items[0] = global;
    tmp2 = c2;
    obj = c2(SentryError);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.message = global;
    tmp3Result.logLevel = str;
    return tmp3Result;
  }
}
_classCallCheck = SentryError;
_inherits(SentryError, _wrapNativeSuper(Error));

export const SentryError = _createClass(SentryError);
