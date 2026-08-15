// _runtime/06619__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FeDistantLight {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeDistantLight);
    tmp2 = __esModule;
    obj = __esModule(FeDistantLight);
    tmp3 = __esModule;
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
require("_inherits")(FeDistantLight, require("noop").Component);
const items = [
  {
    key: "render",
    value: function render() {
      const result = FeDistantLight(6587).warnUnimplementedFilter();
      return null;
    }
  }
];
const importDefaultResultResult = importDefaultResult(FeDistantLight, items);
importDefaultResultResult.displayName = "FeDistantLight";
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;