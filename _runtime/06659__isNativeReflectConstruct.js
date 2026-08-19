// _runtime/06659__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "06595__isNativeReflectConstruct.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

const Polygon = importDefault;
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
noopAll;
class Polygon {
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
        points.d = "M" + lib(dependencyMap[7])(points) + "z";
      }
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(Polygon, _isNativeReflectConstructDefault);
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
        combined = "M" + Polygon(6660)(points) + "z";
      }
      obj[1] = combined;
      const merged = Object.assign(props);
      return jsx(Polygon(6655), { ref: this.refMethod, d: null });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Polygon, items);
importDefaultResultResult.displayName = "Polygon";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;