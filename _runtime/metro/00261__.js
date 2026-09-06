// _runtime/metro/00261__.js
import _wrapNativeSuperDefault from "00158__wrapNativeSuper.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
class HeadlessJsTaskError {
  constructor() {
    self = this;
    tmp = closure_0(this, HeadlessJsTaskError);
    tmp2 = c2;
    obj = c2(HeadlessJsTaskError);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = HeadlessJsTaskError;
_inherits(HeadlessJsTaskError, _wrapNativeSuperDefault(Error));

export default _createClass(HeadlessJsTaskError);
