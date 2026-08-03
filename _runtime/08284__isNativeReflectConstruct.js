// === Module 8284: _isNativeReflectConstruct ===

// Module 8284 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Polygon {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.setNativeProps = (points) => {
      points = points.points;
      if (points) {
        const _HermesInternal = HermesInternal;
        points.d = "M" + _undefined(outer1_1[7])(points) + "z";
      }
      if (_undefined.root) {
        const root = _undefined.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(Polygon, require("_isNativeReflectConstruct"));
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
        combined = "M" + Polygon(8285)(points) + "z";
      }
      obj[1] = combined;
      const merged = Object.assign(props);
      return jsx(Polygon(8280), { ref: this.refMethod, d: null });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Polygon, items);
importDefaultResultResult.displayName = "Polygon";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;