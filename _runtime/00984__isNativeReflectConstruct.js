import _createClass from "_createClass";
import _classCallCheck from "_classCallCheck";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _wrapNativeSuper from "_wrapNativeSuper";

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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
    tmp2 = outer1_2;
    obj = outer1_2(SentryError);
    tmp3 = outer1_1;
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
_classCallCheck = SentryError;
_inherits(SentryError, _wrapNativeSuper(Error));

export const SentryError = _createClass(SentryError);