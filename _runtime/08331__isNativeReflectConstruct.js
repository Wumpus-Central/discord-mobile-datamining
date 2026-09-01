// _runtime/08331__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08265__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

const Polyline = importDefault;
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
noopAll;
class Polyline {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (points) => {
      points = points.points;
      if (points) {
        const _HermesInternal = HermesInternal;
        points.d = "M" + lib(closure_1_1[7])(points);
      }
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(Polyline, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      const props = this.props;
      const points = props.points;
      const obj = { ref: this.refMethod, d: null };
      let combined = points;
      if (points) {
        const _HermesInternal = HermesInternal;
        combined = "M" + Polyline(8330)(points);
      }
      obj[1] = combined;
      const merged = Object.assign(props);
      return jsx(Polyline(8325), { ref: this.refMethod, d: null });
    },
  },
];
const importDefaultResultResult = importDefaultResult(Polyline, items);
importDefaultResultResult.displayName = "Polyline";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;
