// _runtime/08314__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const FeSpotLight = arg1;
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
      const result = FeSpotLight(8266).warnUnimplementedFilter();
      return null;
    },
  },
];
const importDefaultResultResult = importDefaultResult(FeSpotLight, items);
importDefaultResultResult.displayName = "FeSpotLight";
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;
