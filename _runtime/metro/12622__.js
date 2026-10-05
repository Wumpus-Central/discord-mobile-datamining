// === Module 12622: ? ===

// Module 12622
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class SentryError {
  constructor(message) {
    let constructResult;
    let str = arg1;
    if (arg1 === undefined) {
      str = "warn";
    }
    const self = this;
    _classCallCheck(this, SentryError);
    const items = [message];
    const obj = _getPrototypeOf(SentryError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.message = message;
    tmp3Result.logLevel = str;
    return tmp3Result;
  }
}
_inherits(SentryError, _wrapNativeSuper(Error));
const SentryError_export = _createClass(SentryError);

export { SentryError_export as SentryError };