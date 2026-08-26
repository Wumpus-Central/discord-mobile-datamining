// _runtime/08098__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08091__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const FeDiffuseLighting = arg1;
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
class FeDiffuseLighting {
  constructor() {
    self = this;
    tmp = closure_2(this, FeDiffuseLighting);
    tmp2 = closure_4;
    obj = closure_4(FeDiffuseLighting);
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
_inheritsDefault(FeDiffuseLighting, _isNativeReflectConstructDefault);
let obj = {
  key: "render",
  value: function render() {
    const result = FeDiffuseLighting(8068).warnUnimplementedFilter();
    return null;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeDiffuseLighting, items);
importDefaultResultResult.displayName = "FeDiffuseLighting";
obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;