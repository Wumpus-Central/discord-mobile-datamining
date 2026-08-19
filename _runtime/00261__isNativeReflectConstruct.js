// === Module 261: _isNativeReflectConstruct ===

// Module 261 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import HeadlessJsTaskError from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

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