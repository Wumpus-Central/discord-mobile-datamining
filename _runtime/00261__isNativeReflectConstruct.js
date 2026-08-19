// _runtime/00261__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _wrapNativeSuperDefault from "metro/00158__wrapNativeSuper.js";
import HeadlessJsTaskError from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

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
class HeadlessJsTaskError {
  constructor() {
    self = this;
    tmp = HeadlessJsTaskError(this, HeadlessJsTaskError);
    tmp2 = closure_2;
    obj = closure_2(HeadlessJsTaskError);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inheritsDefault(HeadlessJsTaskError, _wrapNativeSuperDefault(Error));

export default importDefaultResult(HeadlessJsTaskError);