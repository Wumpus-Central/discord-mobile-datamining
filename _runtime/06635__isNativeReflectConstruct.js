// === Module 6635: _isNativeReflectConstruct ===

// Module 6635 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

const FeSpotLight = fn;
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
class FeSpotLight {
  constructor() {
    self = this;
    tmp = closure_2(this, FeSpotLight);
    tmp2 = closure_4;
    obj = closure_4(FeSpotLight);
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
_inheritsDefault(FeSpotLight, require("noop").Component);
const items = [
  {
    key: "render",
    value: function render() {
      const result = FeSpotLight(6587).warnUnimplementedFilter();
      return null;
    }
  }
];
const importDefaultResultResult = importDefaultResult(FeSpotLight, items);
importDefaultResultResult.displayName = "FeSpotLight";
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;