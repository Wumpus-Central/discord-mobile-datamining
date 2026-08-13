// _runtime/07922__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

const FeComponentTransfer = arg1;
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
class FeComponentTransfer {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeComponentTransfer);
    tmp2 = __esModule;
    obj = __esModule(FeComponentTransfer);
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
require("_inherits")(FeComponentTransfer, require("_isNativeReflectConstruct"));
let obj = {
  key: "render",
  value: function render() {
    const result = FeComponentTransfer(7896).warnUnimplementedFilter();
    return null;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeComponentTransfer, items);
importDefaultResultResult.displayName = "FeComponentTransfer";
obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;