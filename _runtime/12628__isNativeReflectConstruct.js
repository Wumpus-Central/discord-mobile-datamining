// _runtime/12628__isNativeReflectConstruct.js
import _createClass from "metro/00042__createClass.js";
import SentryError from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import _wrapNativeSuper from "metro/00158__wrapNativeSuper.js";

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
class SentryError {
  constructor(arg0) {
    str = require;
    if (require === undefined) {
      str = "warn";
    }
    self = this;
    tmp = SentryError(this, SentryError);
    items = [];
    items[0] = global;
    tmp2 = closure_2;
    obj = closure_2(SentryError);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
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
_inherits(SentryError, _wrapNativeSuper(Error));

export const SentryError = _createClass(SentryError);
