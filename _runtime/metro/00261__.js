// === Module 261: ? ===

// Module 261
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
_possibleConstructorReturnDefault;
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