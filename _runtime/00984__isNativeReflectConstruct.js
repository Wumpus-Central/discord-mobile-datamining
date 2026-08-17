// _runtime/00984__isNativeReflectConstruct.js
import _createClass from "_createClass" /* 42 */;
import SentryError from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

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