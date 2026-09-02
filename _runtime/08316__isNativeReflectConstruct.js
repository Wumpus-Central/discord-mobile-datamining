// === Module 8316: _isNativeReflectConstruct ===

// Module 8316 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8289 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

const FeTurbulence = arg1;
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
class FeTurbulence {
  constructor() {
    self = this;
    tmp = closure_2(this, FeTurbulence);
    tmp2 = closure_4;
    obj = closure_4(FeTurbulence);
    tmp3 = closure_3;
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
_inheritsDefault(FeTurbulence, _isNativeReflectConstructDefault);
let obj = {
  key: "render",
  value: function render() {
    const result = FeTurbulence(8266).warnUnimplementedFilter();
    return null;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeTurbulence, items);
importDefaultResultResult.displayName = "FeTurbulence";
obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;