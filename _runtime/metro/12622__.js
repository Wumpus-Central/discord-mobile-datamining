// _runtime/metro/12622__.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _wrapNativeSuper from "00158__wrapNativeSuper.js";

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
