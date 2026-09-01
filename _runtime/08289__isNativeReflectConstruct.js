// === Module 8289: _isNativeReflectConstruct ===

// Module 8289 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

const FeDistantLight = arg1;
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
class FeDistantLight {
  constructor() {
    self = this;
    tmp = closure_2(this, FeDistantLight);
    tmp2 = closure_4;
    obj = closure_4(FeDistantLight);
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
_inheritsDefault(FeDistantLight, require("noop").Component);
const items = [
  {
    key: "render",
    value: function render() {
      const result = FeDistantLight(8257).warnUnimplementedFilter();
      return null;
    }
  }
];
const importDefaultResultResult = importDefaultResult(FeDistantLight, items);
importDefaultResultResult.displayName = "FeDistantLight";
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;