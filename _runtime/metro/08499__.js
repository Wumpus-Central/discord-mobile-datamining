// _runtime/metro/08499__.js
import _modDef8492 from "08492__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
class FeDiffuseLighting {
  constructor() {
    self = this;
    tmp = c2(this, FeDiffuseLighting);
    tmp2 = closure_4;
    obj = closure_4(FeDiffuseLighting);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(FeDiffuseLighting, _modDef8492);
const entry = {
  key: "render",
  value: function render() {
    const result = FeDiffuseLighting(8469).warnUnimplementedFilter();
    return null;
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(FeDiffuseLighting, items);
importDefaultResultResult.displayName = "FeDiffuseLighting";
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;
